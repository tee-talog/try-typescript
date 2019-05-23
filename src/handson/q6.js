{
  /*
  type Name = {
    firstName: string,
    lastName: string
  }
  */

  // string か Name 型を受け取り、Name 型の場合は firstName と lastName を結合させる関数
  const joinedName = () => {
    // もし string 型なら引数をそのまま帰す
    // もし Name 型なら firstName + lastName を返す
  }

  console.log(joinedName('nakano')) // => nakano
  console.log(joinedName('senko')) // => senko
  console.log(joinedName({ firstName: 'Yasuko', lastName: 'Koenji' })) // => YasukoKoenji
}
