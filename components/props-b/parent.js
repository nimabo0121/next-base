import { useState } from 'react'
import ChildA from './child-a'
import ChildB from './child-b'

export default function Parent() {
  // const [pData, setPData] = useState('parent data')
  // 宣告一組專門要給子女B元件回傳資料的狀態
  const [dataFromChild, setDataFromChild] = useState('')

  return (
    <>
      <h2>Parent</h2>
      <p>來自子女B的資料: {dataFromChild}</p>
      {/* P -> C */}
      {/* ***寫法*** <ChildA pData> 等於 <ChildA pData={true}> */}
      {/* ***正確寫法*** <ChildA pData={pData}> pData =>名字 {pData} => 值 */}
      <ChildA dataFromChild={dataFromChild} />
      {/* C -> P專用的傳送資料的狀態設定函式 */}
      <ChildB setDataFromChild={setDataFromChild} />
    </>
  )
}
