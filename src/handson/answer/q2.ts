{
  const isNull = (value: string | null): boolean => value === null
  console.log(isNull(null)) // => true
  console.log(isNull('test')) // => false
  // console.log(isNull(1)) // 行頭のコメントを外すとコンパイルエラー
}
