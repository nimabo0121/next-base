import { useState } from 'react'

const initState = () => {
  return { v: 1 }
}

export default function Test() {
  const [total, setTotal] = useState(0)

  return (
    <>
      {/* 純函式寫法 */}
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
          // setTotal((state) => state +1)
        }}
      >
        +1
      </button>
    </>
  )
}
