// 導入時就自動轉為JS資料格式
import products from '@/data/Product.json'
import Image from 'next/image'
// img 四個必要, src, alt, 參考比例,數字{width, height}

// 第三步: 導入module.css 檔案, styles會是一個物件
import styles from '@/styles/product-table.module.css'

export default function ProductTable() {
  console.log(products)
  return (
    <>
      {/* 第四步: 用className套用styles內的物件屬性 */}
      {/* styles[my-table] 不同檔名導入方式 */}
      <table className={styles.myTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {products.map((v, i) => {
            return (
              <tr key={v}>
                {/* 物件.物件的值 v.id */}
                <td>{v.id}</td>
                <td>
                  <Image
                    src={`/pics/${v.photos.split(',')[0]}`}
                    alt={v.name}
                    width={150}
                    height={100}
                    class
                  />
                </td>
                <td>{v.name}</td>
                <td>{v.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {/* 載入樣式 */}
      <style></style>
    </>
  )
}
