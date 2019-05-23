{
  const insertSpace = function(this: string): string {
    return this.split('').join(' ')
  }
  console.log(insertSpace.call('test'))
}
