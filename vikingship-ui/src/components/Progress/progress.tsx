import React, { FC } from 'react'
import { ThemeProps } from '../Icon/icon'

export interface ProgressProps {
  /** 当前百分比 */
  percent: number;
  /** 高度 */
  strokeHeight?: number;
  /** 是否显示百分比数字 */
  showText?: boolean;
  /** 额外的样式 */
  styles?: React.CSSProperties;
  /** 主题 */
  theme?: ThemeProps;
}

const Progress: FC<ProgressProps> = (props) => {
  const {
    percent,
    strokeHeight,
    showText,
    styles,
    theme,
  } = props

  return (
    <div className="viking-progress-bar" style={styles}>
      <div className="viking-progress-bar-outer" style={{ height: `${strokeHeight}px`}}>
        <div
          className={`viking-progress-bar-inner color-${theme}`}
          style={{width: `${percent}%`}}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  )
}

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: "primary"
}

export default Progress
