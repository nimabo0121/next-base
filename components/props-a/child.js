import React from 'react'
import PropTypes from 'prop-types'

// 子女元件可以從函式的傳入參數值得到父母傳來的值
// props 必定是一個物件
// 傳入參數值 解構提取 props 所有屬性成為變數 一定要使用 {} 花括號
export default function Child({
  title = '沒有資料', //使用指定值的寫法, 用來給定預設屬性值
  price = 0,
  isConnected = false,
  aa = [],
  oa = {},
  sum = () => {},
}) {
  return (
    <>
      <h3>Child</h3>
      <p>title={title}</p>
      <p>price={price}</p>
      <p>isConnected={isConnected ? 'true' : 'false'}</p>
      <p>aa={JSON.stringify(aa)}</p>
      <p>oa={JSON.stringify(oa)}</p>
      <p>sum(1,2)={sum(1, 2)}</p>
    </>
  )
}

// 在元件外定義, isRequired 必填
// 屬性類型的檢查
// ES中的class fields標準
Child.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isConnected: PropTypes.bool.isRequired,
}
