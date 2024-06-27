import { M_PLUS_1 } from 'next/font/google'
import { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
]

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)

  // onIncrease, onAddOne, addOne
  const handleIncrease = (productId) => {
    const nextProducts = products.map((v, i) => {
      // 如果符合(id相當於傳入的productId)的物件, 遞增其中屬性count的數字
      if (v.id === productId) return { ...v, count: v.count + 1 }
      // 否則回傳原本物件
      else return v
    })

    setProducts(nextProducts)
  }
  const handleDecrease = (productId) => {
    const nextProducts = products.map((v, i) => {
      // 如果符合(id相當於傳入的productId)的物件, 遞減其中屬性count的數字
      if (v.id === productId) return { ...v, count: v.count - 1 }
      // 否則回傳原本物件
      else return v
    })
    setProducts(nextProducts)
  }

  const handleRemove = (productId) => {
    // 使用 filter
    const nextProducts = products.filter((v, i) => {
      return v.id !== productId
    })
    setProducts(nextProducts)
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncrease(product.id)
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              // 先計算(預測)按此按鈕後, 商品數量會變多少
              const nextProductCount = product.count - 1

              // 如果按了之後商品數量<=0, 則做移除
              if (nextProductCount <= 0) {
                if (confirm('確定要移除此商品嗎?')) {
                  handleRemove(product.id)
                }
              } else {
                // 否則做遞減
                handleDecrease(product.id)
              }
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  )
}
