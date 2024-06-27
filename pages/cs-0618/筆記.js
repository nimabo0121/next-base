// 工具
全站   global css | Tailcoind-css

// 動態樣式較適合
小元件 style      | sass

元件   css Modules| styled-component

元件   styled-jex | emotion


邏輯子運算 符號




  短路求值, 缺點: 不精確
last value 最後參與運算的值 or 最後參與短路運算的值

&& AND 00 0 | 01 0 | 10 0 | 11 1
|| OR  00 0 | 01 1 | 10 1 | 11 1

ex: 1 && null && [] && o
運算方向 =>

!  NOT

              falsy       | truthy

              false         []
              +-0           {}
空值          null          
空值          undefined
空白字串       ""        
'a'/1 'a'-1   NaN   