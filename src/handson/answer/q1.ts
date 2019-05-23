{
  const add: (a: number, b: number) => number = ( // 省略可
    a: number,
    b: number
  ): number => a + b // 戻り値の型は省略可

  const one: number = 1 // 省略可
  const two: number = 2 // 省略可
  console.log(add(one, two)) // => 3
  // console.log(add(one, 'two')) // // 行頭のコメントを外すとコンパイルエラー
  // console.log(add(one, null)) // // 行頭のコメントを外すとコンパイルエラー
}
