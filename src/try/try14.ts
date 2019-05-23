{
  type Human = {
    name: string
    organization?: string
  }
  const mushoku: Human = { name: '無職の男' } // organization プロパティを定義しなくても OK
  console.log(mushoku.name)
}
