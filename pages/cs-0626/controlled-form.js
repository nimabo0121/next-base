import { useState } from 'react'

import MyInputText from '@/components/controlled-form/my-input-text'
import MyTextarea from '@/components/controlled-form/my-textarea'
import MyRadioButtonGroup from '@/components/controlled-form/my-radio-button-group'
import MyCheckboxGroup from '@/components/controlled-form/my-checkbox-group'

export default function ControlledForm() {
  // 下拉清單 select
  const cityOptions = [
    '台北市',
    '桃園市',
    '新北市',
    '台中市',
    '台南市',
    '高雄市',
  ]

  // 宣告下拉市清單選中的狀態字串值
  // 初始值是空白字串代表沒有選擇值
  const [city, setCity] = useState('')
  return (
    <>
      <h1>可控表單元件範例</h1>
      <hr />
      {/* <MyInputText /> */}
      {/* <MyTextarea /> */}
      {/* <MyRadioButtonGroup /> */}
      {/* <MyCheckboxGroup /> */}
      <div title="select">
        <h2>下拉清單(select)</h2>
        <select
          // 在react 中為了使用方便, 修改select 才有value屬性和onChange綁定狀態
          value={city}
          onChange={(e) => {
            setCity(e.target.value)
          }}
        >
          {/* 為了要對應初始值city 狀態, 加入這個初始或未選擇的選項 */}
          <option value="">請選擇城市</option>
          {cityOptions.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
        </select>
      </div>
    </>
  )
}
