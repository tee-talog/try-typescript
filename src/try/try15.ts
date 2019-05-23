{
  const TheDecorator = (arg: string) => {
    return (target: any, name: string, descriptor: PropertyDescriptor) => {
      // 元メソッド
      const method = descriptor.value

      descriptor.value = function() {
        console.log('decorator ' + arg)
        // 元のメソッドを呼ぶ
        return method.apply(this, arguments)
      }
    }
  }

  class A {
    @TheDecorator('hello')
    nop() {}
  }

  new A().nop() // => decorator hello
}
