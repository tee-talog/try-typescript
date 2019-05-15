{
  // number 型の配列
  const pi1: Array<number> = [1, 4, 1, 5, 9, 2]
  // boolean 型の配列
  const pi2: Array<boolean> = [true, false, false, false]

  const genericFunc = <T>(obj: T): T => obj // 必ず引数と同じ型が返ることが保証される
  console.log(genericFunc(1)) // 必ず数値型が返る
  console.log(genericFunc('test')) // 必ず文字列が返る
}
