import { useState } from 'react'
// 導入.module.css檔案
import styles from '@/styles/star.module.css'

export default function Star() {
  // 記錄點按時的評分, 初始值是0
  const [rating, setRating] = useState(0)
  // 滑鼠游標移懸停(hover)的評分, 初始值 0
  const [hoverRating, setHoverRating] = useState(0)
  return (
    <>
      <h1>星星評分範例</h1>
      <div>
        {/* fill() 填充, i => 每個成員的索引值*/}
        {Array(5)
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
                  // 判斷星星是否要點亮, 如果這個星星分數(score)小於選中的(rating) 或是 懸停 hoverRating 的評分, 則點亮樣式
                  className={
                    score <= rating || score <= hoverRating
                      ? styles.on
                      : styles.off
                  }
                >
                  &#9733;
                </span>
              </button>
            )
          })}
      </div>
      <p>你選了{rating}分</p>
    </>
  )
}
