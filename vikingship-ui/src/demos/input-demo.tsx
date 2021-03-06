import React from 'react'
import Input from '../components/Input/input'
import AutoComplete, { DataSourceType } from '../components/AutoComplete/autoComplete'

interface itemProps {
  value: string;
  number?: number;
}
function InputDemo() {
  const arrayList: DataSourceType<itemProps>[] = [
    {value: 'abc', number: 1}, {value: 'def', number: 1}, {value: 'ghi', number: 1},
    {value: 'jkl', number: 1}, {value: 'mno', number: 1}, {value: 'pqr', number: 1},
    {value: 'stu', number: 1}, {value: 'vwx', number: 1}, {value: 'yz', number: 1}]


  const handleSelect = (item: DataSourceType) => {
    console.log(item);
  }

  const renderOption = (item: DataSourceType<itemProps>) => {
    return (
      <h3>{item.value} - {item.number}</h3>
    )
  }
  return (
    <div style={{ width: '85%', margin: '2rem auto' }}>
      <Input
        placeholder="input"
        // size="lg"
        // disabled={true}
        icon="calculator"
        prepend="https://"
        style={{width: '500px'}}
        // append=".com"
      />
      <AutoComplete fetchSuggestions={() => arrayList} placeholder="test" onSelect={handleSelect} renderOption={ renderOption} />

    </div>
  )
}

export default InputDemo
