import React from 'react'

export default function JsxMap() {
  // ul-li 呈現以下資料
  const aa = [1, 4, 9, 16]

  // 準備要渲染的陣列
  // v = value, i = index
  // 表達式
  const ab = aa.map((v, i) => {
    return <li key={i}>{v}</li>
  })
  // 如果值 v 要 * 2 , 直接在花括號內 { v * 2 }
  // 這個回傳值代表 回傳後要做甚麼再回傳至新的陣列
  // 函式呼叫,最後回傳陣列

  // ab 相當於
  //  [ <li key={0}>1</li>,
  //    <li key={1}>4</li>,
  //    <li key={2}>9</li>,
  //    <li key={3}>16</li>,
  //]
  return (
    <>
      <h1> JSX 中陣列 map 範例</h1>
      <hr />
      <ul>{ab}</ul>
      {/* 實作上不需要額外宣告一個ab, 直接在 jsx寫一個map即可 */}
      <ul>
        {aa.map((v, i) => {
          return <li key={i}>{v}</li>
        })}
      </ul>
    </>
  )
}
