{
  class Human {
    constructor(name) {
      // private field
      this._name = name
    }

    get name() {
      return this._name
    }
  }

  const tanaka = new Human('Tarou Tanaka')
  console.log(tanaka.name)
}
