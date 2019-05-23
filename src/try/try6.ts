{
  // 配列型（どちらでも可）
  const fibonacci: number[] = [0, 1, 1, 2, 3, 5]
  const pi: Array<number> = [1, 4, 1, 5, 9, 2] // ジェネリクスを利用（後述）

  // オブジェクト型
  type Human = {
    firstName: string
    lastName: string
  }
  const tanaka: Human = {
    firstName: 'Tarou',
    lastName: 'Tanaka'
  }

  // 関数型
  type funcType = (a: number, b: number) => number
  const add: funcType = (a, b) => a + b
}
