import next from 'next'
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
          // 第1種: 使用filter
          // 過濾後剩下除了id為4的資料, 相當於, 刪除id=4 的資料
          // const nextData = data.filter((v, i) => {
          //   return v.id !== 4
          // })

          // setData(nextData)

          // 第2種: for迴圈 => 效率最好 #必學
          const nextData = []

          // for (let i = 0; i < data.length; i++) {
          //   if (data[i].id !== 4) {
          //     nextData.push(data[i])
          //   }
          // }

          setData(nextData)
          // 第3種: 使用splice(黏接), 注意有副作用,呼叫他的陣列有可能會被更動,使用時套用公式為佳
          // 不可改變性, 不能直接更改設定
          // 刪除公式: array.splice(deleteIndex, 1)
          // 1. 找到這個id為4的索引值為多少
          const foundIndex = data.findIndex((v) => v.id === 4)

          // 2. 判斷有沒有找到 兩種寫法
          if (foundIndex > -1) {
            // 有找到
            // 進入React 更新三步驟=>
            // 1.拷貝, 建議(深拷貝)
            // const nextData = [...data]
            // 深拷貝語法 =>利用JSON 轉成JSON 再轉回來
            // 缺點 => 不是精確的深拷貝 優點 => 使用效率高
            const nextData = JSON.parse(JSON.stringify(data))
            // 2.在複本上處理
            nextData.splice(foundIndex, 1)
            // 3.設定回狀態
            setData(nextData)
          }
        }}
      >
        7. 刪除id為4的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 第1種: 使用map
          // map 展開其中成員 陣列 找出v, i(沒用到可刪)
          const nextData = data.map((v, i) => {
            //如果id = 3 , 回傳修改其中屬性text為'cccc'的物件
            if (v.id === 3) return { ...v, text: 'cccc' }
            // 否則回傳原本物件
            else return v
          })
          setData(nextData)

          // 第2種: 深拷貝+更動
          // // 1. 尋找是否有id為3的資料索引
          // const foundIndex = data.findIndex((v) => v.id === 3)
          // // 2. 判斷是否有找到, 有找到在處理
          // if (foundIndex > -1) {
          //   // 2-1 深拷貝(一定要深拷貝, 因碰觸到陣列內容), 或是用structureClone
          //   const nextData = JSON.parse(JSON.stringify(data))
          //   // 2-2 在nextData上更動資料
          //   nextData[foundIndex].text = 'cccc'
          //   // 2-3 設定到狀態
          //   setData(nextData)
          // }
        }}
      >
        8. 取代id為3的文字為cccc
      </button>
      <br />
      <button
        onClick={() => {
          setData([])
        }}
      >
        9. 清空表格
      </button>
      <br />
      <button
        onClick={() => {
          // 第1種: 使用slice(分割)
          // 公式: array.slice(starIndex, endIndex), 注意不包含endIndex成員
          // 1. 尋找是否有id為2的資料索引
          // const foundIndex = data.findIndex((v) => v.id === 2)
          // // 2. 判斷是否有找到,有找到在處理
          // if (foundIndex > -1) {
          //   // 2-1 建立(分割出)兩個子女陣列
          //   const aa = data.slice(0, foundIndex + 1)
          //   const ab = data.slice(foundIndex + 1)
          //   // console.log(aa, ab)
          //   // 寫出要新增的物件值
          //   const newObj = { id: 5, text: 'bbb' }
          //   // 2-2 組合出一個新陣列
          //   const nextData = [...aa, newObj, ...ab]
          //   // 2-3 設定到狀態
          //   setData(nextData)
          // }
          // 第2種: 使用splice(黏接)
          // 使用splice(黏接), 注意有副作用,呼叫他的陣列有可能會被更動,使用時套用公式為佳
          // 刪除公式(到某索引值之後)=> array.splice(insertIndex + 1, 0, value)
          // 1. 尋找是否有id為2的資料索引
          // const foundIndex = data.findIndex((v) => v.id === 2)
          // // 2. 判斷是否有找到,有找到在處理
          // if (foundIndex > -1) {
          //   // 2-1 深拷貝, 或是用structureClone
          //   const nextData = JSON.parse(JSON.stringify(data))
          //   // 此操作並沒處理到物件層級, 淺拷貝陣列即可
          //   // const nexData = [...data]
          //   // 2-2 在nextData上更動資料
          //   nextData.splice(foundIndex + 1, 0, { id: 5, text: 'bbb' })
          //   // 2-3 設定到狀態
          //   setData(nextData)
          // }

          // 第3種: for迴圈 (推薦)
          const nextData = []

          for (let i = 0; i < data.length; i++) {
            // 固定把data中的成員一個個加入
            nextData.push(data[i])
            if (data[i].id === 2) {
              nextData.push({ id: 5, text: 'bbb' })
            }
          }

          setData(nextData)
        }}
      >
        10. 在id為2後面插入id為5與文字為bbb的物件
      </button>
    </>
  )
}
