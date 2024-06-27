import { useState } from 'react'

const sample = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
]

export default function ObjectArray() {
  // 呈現(渲染)時會與使用者互動時進行改動，必需是state
  const [data, setData] = useState(sample)

  return (
    <>
      <h1>物件陣列(object array)狀態的各種操作</h1>
      <hr />
      <h2>資料表格</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.text}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <hr />
      <h2>操作</h2>
      <p>
        <strong>
          注意: 請在任一操作前先重新整理網頁 ，或是對重覆id值進行加入時的限制。
        </strong>
        有些操作是key值會對應id的關係，會產生key值重覆問題，造成不預期的結果。實務上務必要考慮key不可以重覆問題。
      </p>

      <button
        onClick={() => {
          // 先寫出要新增的物件值
          const newObj = { id: 99, text: 'xxx' }

          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const nextData = [newObj, ...data]

          //3
          setData(nextData)
        }}
      >
        1. 列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newObj = { id: 88, text: 'yyy' }

          //1 //2
          const nextData = [...data, newObj]

          //3
          setData(nextData)
        }}
      >
        2. 列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 產生id 方式
          // 1. uuid
          // const newId = self.crypto.randomUUID()
          //
          // 2. 隨機字串或是產生hash字串的函示庫或函式(nanoid)
          // const newId = (Math.random() + 1).toString(36).substring(7)
          //
          // 3.時間日期轉毫秒整數值 (或組合為時間字串 or 數字字串)
          // `+new Date()` or `Date.now()`
          // const newId =。 Number(new Date())
          //
          // 4.仿照資料庫資料表自動遞增id值(只能用於 id 是 number)
          // 提取目前狀態data陣列中的id值為一陣列
          const ids = data.map((v) => v.id)
          // console.log(ids)
          // 新id為最大值+1, 如果沒資料, 從1開始計算
          const newId = data.length > 0 ? Math.max(...ids) + 1 : +1

          // 先寫出要新增的物件值
          const newObj = { id: newId, text: 'xxx' }

          //1 //2
          const nextData = [newObj, ...data]

          //3
          setData(nextData)
        }}
      >
        3. 列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          // 產生id 方式
          // 1. uuid
          // const newId = self.crypto.randomUUID()
          //
          // 2. 隨機字串或是產生hash字串的函示庫或函式(nanoid)
          // const newId = (Math.random() + 1).toString(36).substring(7)
          //
          // 3.時間日期轉毫秒整數值 (或組合為時間字串 or 數字字串)
          // `+new Date()` or `Date.now()`
          // const newId =。 Number(new Date())
          //
          // 4.仿照資料庫資料表自動遞增id值(只能用於 id 是 number)
          // 提取目前狀態data陣列中的id值為一陣列
          const ids = data.map((v) => v.id)
          // console.log(ids)
          // 新id為最大值+1, 如果沒資料, 從1開始計算
          const newId = data.length > 0 ? Math.max(...ids) + 1 : +1

          // 先寫出要新增的物件值
          const newObj = { id: newId, text: 'yyy' }

          //1 //2
          const nextData = [...data, newObj]

          //3
          setData(nextData)
        }}
      >
        4. 列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          // 1 . 2
          // data 為不可改變性
          const nextData = data.filter((v, i) => {
            // 尋找物件的值 text 使用includes 函式尋找字串
            return v.text.includes('a')
          })

          // 3
          setData(nextData)
        }}
      >
        5. 尋找(過濾)只呈現所有文字中有包含a英文字母的資料
      </button>
      <br />
      <button
        onClick={() => {
          // 1 . 2
          // data 為不可改變性
          const nextData = data.filter((v, i) => {
            // 尋找物件的值 text 不等於 b
            // 不同思考方式 => 更新一個狀態沒有 b
            return v.text !== 'b'
          })

          // 3
          setData(nextData)
        }}
      >
        6. 刪除文字為b的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 1 . 2
          const ids = data.map((v) => v.id)
          // data 為不可改變性
          const nextData = data.filter((v, i) => {
            // 尋找物件的值 text 不等於 b

            // 不同思考方式 => 更新一個狀態沒有 b
            return v.id !== '4'
          })

          // 3
          setData(nextData)
        }}
      >
        7. 刪除id為4的物件資料
      </button>
      <br />
      <button onClick={() => {}}>8. 取代id為3的文字為cccc</button>
      <br />
      <button onClick={() => {}}>9. 清空表格</button>
      <br />
      <button onClick={() => {}}>
        10. 在id為2後面插入id為5與文字為bbb的物件
      </button>
    </>
  )
}
