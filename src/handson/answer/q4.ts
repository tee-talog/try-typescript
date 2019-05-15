{
  class Human {
    private _name: string
    constructor(name: string) {
      this._name = name
    }

    get name(): string {
      return this._name
    }
  }

  const tanaka = new Human('Tarou Tanaka')
  console.log(tanaka.name)
}
