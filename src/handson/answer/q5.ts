{
  type Name = {
    firstName: string
    lastName: string
  }
  const tanaka: Name = {
    // 省略可
    firstName: 'Tarou',
    lastName: 'Tanaka'
  }
  const format = (name: Name) => `${name.firstName} ${name.lastName}`
  console.log(format(tanaka))
}

// 別解
{
  const tanaka = {
    firstName: 'Tarou',
    lastName: 'Tanaka'
  }
  const format = (name: typeof tanaka) => `${name.firstName} ${name.lastName}`
  console.log(format(tanaka))
}
