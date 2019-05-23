{
  // JavaScript と同じ使い方
  const str: string = 'string'
  if (typeof str === 'string') {
    console.log('str is string') // => 出力される
  }

  // TypeScript 独自の使い方
  type strType = typeof str // strType は string 型
  const length = (s: strType): number => s.length
  console.log(length(str)) // => 6
}
