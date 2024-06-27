import { useState } from 'react'
// 導入.module.css檔案
import styles from './star.module.css'

export default function Star({
  maxCount = 5, // 預設max = 5
  initRating = 0, // 一開始點亮星星數量, 初始評分
  // ** 最少要給空白函式, 否則對照組可能壞掉 **
  onRatingChang = () => {}, // 點按回傳評分用的函式
  fillColor = 'gold',
  emptyColor = 'gray',
  icon = <>&#9733;</>,
}) {
  // 記錄點按時的評分, 初始值是0
  const [rating, setRating] = useState(initRating)
  // 滑鼠游標移懸停(hover)的評分, 初始值 , 代入initRating
  const [hoverRating, setHoverRating] = useState(0)
  return (
    <>
      <div>
        {Array(maxCount)
          .fill(1)
          .map((v, i) => {
            // 每個圖示按鈕的分數, 相當於索引+1
            const score = i + 1
            return (
              <button
                // 從初次渲染到應用程式執行過程中,都不會新增, 刪除, 修改, 排序... 狀況
                // 才能使用index(索引)當key
                key={i}
                className={styles['starBtn']}
                onClick={() => {
                  // 點按後設定分數
                  setRating(score)
                  // 設定點按的時候回送分數給父母元件
                  onRatingChang(score)
                }}
                onMouseEnter={() => {
                  // 滑鼠游標進入
                  setHoverRating(score)
                }}
                onMouseLeave={() => {
                  // 滑鼠游標離開
                  setHoverRating(0)
                }}
              >
                <span
                  // 利用style 標記來帶入顏色屬性值到css 變數中, 要讓css module能套用
                  style={{
                    '--fill-color': fillColor,
                    '--empty-color': emptyColor,
                  }}
                  // 第一種寫法
                  className={
                    score <= rating || score <= hoverRating
                      ? styles.on
                      : styles.off
                  }

                  // 第二種寫法 style 動態套用
                  // 改用 style 屬性來動態套用傳入的屬性值
                  // style={{
                  //   color:
                  //     score <= rating || score <= hoverRating
                  //       ? fillColor
                  //       : emptyColor,
                  // }}

                  // 第三種寫法 style jsx 語法
                  // 判斷星星是否要點亮, 如果這個星星分數(score)小於選中的(rating) 或是 懸停 hoverRating 的評分, 則點亮樣式
                  // className={
                  //   score <= rating || score <= hoverRating ? 'on' : 'off'
                  // }
                >
                  {icon}
                </span>
              </button>
            )
          })}
      </div>
    </>
  )
}
