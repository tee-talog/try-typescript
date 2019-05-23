{
  type Name = {
    firstName: string
    lastName: string
  }

  const joinedName = (name: string | Name) => {
    if (typeof name === 'string') {
      return name
    }
    return name.firstName + name.lastName
  }

  console.log(joinedName('nakano')) // => nakano
  console.log(joinedName('senko')) // => senko
  console.log(joinedName({ firstName: 'Yasuko', lastName: 'Koenji' })) // => YasukoKoenji
}
