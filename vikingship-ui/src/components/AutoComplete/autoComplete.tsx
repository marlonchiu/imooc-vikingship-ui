import React, { FC, useState, ChangeEvent, ReactElement } from 'react'
import Input, { InputProps } from '../Input/input'
import Icon from '../Icon/icon'

interface DataSourceObject {
  value: string;
}
export type DataSourceType<T = {}> = T & DataSourceObject
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?: (item: DataSourceType) => void;
  renderOption?: (item: DataSourceType) => ReactElement;
}


export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,
    value,
    renderOption,
    ...restProps
  } = props

  const [inputValue, setInputValue] = useState(value as string)
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([])
  console.log('suggestions: ', suggestions)
  const [ loading, setLoading ] = useState(false)
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    if (value) {
      const results = fetchSuggestions(value)
      // 判断是不是异步的获取数据
      if (results instanceof Promise) {
        setLoading(true)
        results.then(data => {
          setLoading(false)
          setSuggestions(data)
        })
      } else {
        setSuggestions(results)
      }
    } else {
      setSuggestions([])
    }
  }

  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value)
    setSuggestions([])
    if (onSelect) {
      onSelect(item)
    }
  }

  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value
  }

  const generateDropdown = () => {
    return (
      <ul>
        {
          suggestions.map((item, index) => {
            return (
              <li key={index} onClick={() => handleSelect(item)}>
                {renderTemplate(item)}
              </li>
            )
          })
        }
      </ul>
    )
  }

  return (
    <div className="viking-auto-complete">
      <Input
        value={inputValue}
        onChange={handleChange}
        {...restProps}
      />
      { loading &&
        <ul className="suggestions-loading-icon">
          <Icon icon="spinner" spin />
        </ul>
      }
      {(suggestions.length > 0) && generateDropdown()}
    </div>
  )
}

export default AutoComplete;
