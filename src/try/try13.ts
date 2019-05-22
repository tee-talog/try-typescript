{
  const point = (value: number | string): number => {
    // return value.length // Number.prototype.length が無いため呼び出せない
    if (typeof value === 'number') {
      // number 型
      return value
    }
    // string 型
    return value.length
  }

  console.log(point(100))
  console.log(point('100'))

  // nullable
  let isNull: boolean | null = true
  isNull = null // エラーにならない
}
