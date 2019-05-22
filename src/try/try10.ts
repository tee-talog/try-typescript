{
  const anyVar: any = 'text'
  const nonTyped = anyVar // => any 型
  const typed = anyVar as string // => string 型
}
