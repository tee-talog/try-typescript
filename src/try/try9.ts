{
  const toString = (value: number | boolean): string => value.toString()
  console.log(toString(100))
  console.log(toString(true))

  // nullable
  let isNull: boolean | null = true
  isNull = null // エラーにならない
}
