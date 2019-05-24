# TypeScript 入門

---

### アジェンダ
* 前提知識
* 実際に書いてみる
* 型入門
* 言語機能
* ハンズオン
* Vue.js ＋ TypeScript

---

### 前提：ES5 → ES2015 アップデート
* `var` → `let`, `const`
* `function (args) { }` → `(args) => { }`
* class 構文が追加
* その他便利な機能・構文が追加

もっと詳しく知りたい方はこちら
https://qiita.com/shibukawa/items/19ab5c381bbb2e09d0d9

---

# TypeScript の前提知識

---

### TypeScript とは
一言で表すと、静的型付けの JavaScript。コンパイル（トランスパイル）すると JavaScript になり、ブラウザで動くようになる。
略称は TS。
オープンソース。

Microsoft が開発した（不安）。  
Google の標準言語になっている（安心）。

---

### エディタ
TypeScript のエディタとしては Visual Studio Code が最強。特にこだわりがなければこちらの利用を推奨。

https://code.visualstudio.com/

---

### JavaScript と TypeScript
```js
const add = (a, b) => a + b
console.log(add(1, 2)) // => 3
```

よく見る JavaScript コード。

これは **TypeScript のコードとしても有効**。

---

### 型 is どこ？
型書いてない！ TypeScript じゃない！ と思うかもしれないが、静的型付けのくせに、**TypeScript では型を書かなくてもいい**。

---

## つまり

---

## TypeScript == JavaScript

---

## **TypeScript は怖くない！**

---

# 完

---

### と言いたいところだが……
型を書かなくてもいいが、それだと残念ながら TypeScript の恩恵がほぼ受けられない。

---

実際、一般的な静的型付け言語だと、add 関数の引数は数値しか受け取れないようになるはず。

```js
// 再掲
const add = (a, b) => a + b
console.log(add(1, 2)) // => 3
```

---

もちろん、TypeScript でも 引数に特定の値だけを受け取れるようにすることが可能。

---

## ここまでのまとめ（前提知識編）
* TypeScript は型のついた JavaScript
* ほとんどの JavaScript コードは TypeScript としても解釈できる
* しかし、TypeScript はもっと強くなれる……！

---

# 実際に書いてみる

---

### 環境構築
JavaScript と違い TypeScript はブラウザネイティブで動かないので、コンパイル（トランスパイルとも）が必須。

コンパイラは TypeScript をインストールすると tsc というコマンドとして入っている。

---

以下のコマンドで、リポジトリのクローンと TypeScript やその他ライブラリのインストールを行う。

```sh:Terminal
git clone https://github.com/tee-talog/try-typescript.git
cd try-typescript
npm i
```

---

### 初期設定
<small>※今回は実施不要</small>

コンパイラオプションを設定することにより、型の強制力やコンパイル対象などを設定できる。
以下のコマンドで設定ファイルの tsconfig.json を自動生成できる。

```sh:Terminal
npx tsc --init
```

---

### 書いてみる
```js
// 再掲
const add = (a, b) => a + b
console.log(add(1, 2)) // => 3
```

とりあえず先程のコード↑を TypeScript らしく書き換えてみる。

---

### 書いてみる
<small>`src/try/try1.ts`</small>

```ts
const add = (a: number, b: number): number => a + b
console.log(add(1, 2)) // => 3
```

<small>諸事情により、実際のソースではブロックでスコープを切っている。</small>

---

### 実行してみる
```sh:Terminal
# コンパイル
npx tsc -p .

# 実行 (node で普通に実行するだけ)
node dist/try/try1.js
# => 3
```

---

いちいちコンパイル → 実行は大変。

今回はコンパイルせずに直接実行できる ts-node を利用する。


```sh:Terminal
# 直接実行
npm start src/try/try1.ts
 # => 3
```

---

これで TypeScript の実行環境の構築は完了。

必要であれば新しくディレクトリ・ファイルを作成しても問題ない。

---

## ここまでのまとめ（実際に書いてみる編）
* TypeScript は JavaScript にコンパイル（トランスパイル）する必要がある
* コンパイラオプションによって、型の厳格さなどが設定できる
* tsc コマンドでコンパイルできる
* ts-node を利用すると直接実行できる

---

# TypeScript の型入門

---

### 型の書き方
「型アノテーション」というもので型定義する。

<small>`src/try/try2.ts`</small>

```ts
// 変数に型付けする場合
// 変数名: 型 = 値
const str: string = 'Hello World'

// 関数に型付けする場合
// (引数: 引数の型): 戻り値の型 => { 処理内容 }
const add = (a: number, b: number): number => a + b
```

---

### 型推論
型が自明の場合に、明示的な型アノテーションの記述を省略できる。

関数の戻り値は型を明示したほうがいいことが多いが、ローカル変数への代入であれば書かなくても問題ないことがほとんど。

---

#### 例
関数の引数が両方数値で、戻り値がその足し算の場合、戻り値は必ず number 型になる。その部分は型アノテーションを付ける必要がない。

---

<small>`src/try/try3.ts`</small>

```ts
const add = (a: number, b: number) => a + b
const one = 1
const two = 2
console.log(add(one, two)) // => 3
```

---

### 型の種類
* プリミティブ型
    * string（文字列）
    * number（数値）
    * boolean（真偽値）
    * null
    * undefined
    * リテラル型
* 配列型
* オブジェクト型
* 関数型
* any

---

### `null`, `undefined` 型？
TypeScript では、`null`, `undefined` は 1 つの型となっていて、`string` や `number` 型では違う型なので許容しない。
（コンパイラオプションの設定による）

いわゆる **null safety**。

<small>参考：[null安全でない言語は、もはやレガシー言語だ](https://qiita.com/koher/items/e4835bd429b88809ab33)</small>

---

nullable な型（null 許容型）は、後述の Union Types や省略可能なプロパティを使って表現する。

---

### リテラル型？
値（リテラル）そのものが型となるケースがある（const での変数宣言等）。

具体的には、「`1` 型」、「`true` 型」、「`'Hello'` 型」など。

<small>`src/try/try4.ts`</small>

```ts
const one = 1 // => 1 型
const isTrue = true // => true 型
const hello = 'world' // => 'world' 型
```

---

ただ、汎用型に暗黙的に変換できるので、実運用としてはほぼ困らない。
マウスオーバーしたときにリテラル型で表示されることがあるくらい。

---

### any 型？
型付けが必要な TypeScript だが、any 型として宣言すると、その変数などはどの型でも受け入れるようになる。

しかも `null`, `undefined` 含む。

<small>`src/try/try5.ts`</small>

```ts
let something: any = 'any'
something = null
something = undefined
```

---

any 型を使うときは**要注意**。TypeScript としての**利点をすべて放棄**してしまう。

はじめのうちは any を使っても OK としておき、TypeScript に慣れてきたら any の使用を最小限とするのがいい。

---

### その他の宣言方法
<small>`src/try/try6.ts`</small>

```ts
// 配列型（どちらでも可）
const fibonacci: number[] = [0, 1, 1, 2, 3, 5]
const pi: Array<number> = [1, 4, 1, 5, 9, 2] // ジェネリクスを利用（後述）

// オブジェクト型
// type は型を宣言する構文
type Human = {
  firstName: string
  lastName: string
}
const tanaka: Human = {
  firstName: 'Tarou',
  lastName: 'Tanaka'
}

// 関数型
type funcType = (a: number, b: number) => number
const add: funcType = (a, b) => a + b
```

---

## ここまでのまとめ（型入門編）
* 型アノテーション（`: 型名`）で型を指定できる
* 型推論できる
* よく使う型は 10 種類くらいある
* `null`, `undefined` も別の型として認識される
* なんでも受け入れられる any 型がある

---

# TypeScript の言語機能

---

### ジェネリクス
総称型。
型を引数として取り、内部でそれを利用する構文。

※Java 等のジェネリクスと同じ。

<small>`src/try/try7.ts`</small>

```ts
// number 型の配列
const pi1: Array<number> = [1, 4, 1, 5, 9, 2]
// boolean 型の配列
const pi2: Array<boolean> = [true, false, false, false]

const genericFunc = <T>(obj: T): T => obj // 必ず引数と同じ型が返ることが保証される
console.log(genericFunc(1)) // => 1 …… 必ず数値型が返る
console.log(genericFunc('test')) // => test …… 必ず文字列が返る
```

---

### クラス
ほぼ ES2015 のクラスと同じだが、異なる点としては、プロパティを直接 `class {}` の中に書ける。

また、`private` 修飾子の利用も可能。デフォルトはすべて public。

クラスを宣言すると、同時に同名の型も作られ、
`new` したインスタンスはその型になる。

---

<small>`src/try/try8.ts`</small>

```ts
class Human {
  private _name: string
  constructor(name: string) {
    this._name = name
  }
  get name(): string {
    return this._name
  }
}
const tanaka = new Human('Tarou Tanaka') // => Human 型
console.log(tanaka.name) // => 'Tarou Tanaka'
```

---

### this の型
<small>~~正直構文が微妙なので紹介したくない~~</small>

関数内で `this` の型を指定できる。
this が不明瞭な場合のみ指定が必要。

基本的に型推論できるため、あまり使わないはず。

<small>`src/try/try9.ts`</small>

```ts
const insertSpace = function(this: string): string {
  return this.split('').join(' ')
}
console.log(insertSpace.call('test')) // => 't e s t'
```

---

### キャスト
別の型として扱えるようにする構文。

任意の型を any として扱うこともできてしまうので注意が必要。

<small>`src/try/try10.ts`</small>

```ts
const anyVar: any = 'text'
const nonTyped = anyVar // => any 型
const typed: string = anyVar as string // => string 型
```

---

### 型定義ファイル
npm で公開されているモジュールはすべて JavaScript で書かれている。

そこで、型情報をあとから付けて、TypeScript から利用できるようにする方法がある。

---

`@types/モジュール名` というパッケージに型定義ファイルが存在するので、npm でインストールすると TypeScript から利用できるようになる。

ライブラリによっては、本体に同梱されている場合もある。

自分で型定義ファイルを書くこともできる。

---

```sh:Terminal
# クローンしたリポジトリではインストール済み
npm i -D @types/express
```

<small>`src/try/try11.ts`</small>

```ts
import express from 'express'
const app = express() // app は Express 型

app.get('/', (req, res) => {
  res.send('Hello World') // res は Response 型
})
app.listen(3000)
```

---

### typeof 演算子
JavaScript には `typeof` 演算子がある。
もちろん TypeScript でも使えるが、特定のタイミングで JavaScript とは違った挙動になる。

---

型名を書く場所で使用すると、その変数の型が返ってくる。

<small>`src/try/try12.ts`</small>

```ts
// JavaScript と同じ使い方
const str: string = 'string'
if (typeof str === 'string') {
  console.log('str is string') // => 出力される
}

// TypeScript 独自の使い方
type strType = typeof str // strType は string 型
const length = (s: strType): number => s.length
console.log(length(str)) // => 6
```

---

### Union Types
「○○型**または**☓☓型」という型。
珍しい型だが、TypeScript ではよく使われる。
特に nullable 型はこれを使って表現する。

例えば `number | string` は、「number 型または string 型」となる。

---

そのままでは各型に共通の操作しかできない。`typeof` やプロパティの有無などで絞り込むことで、固有の操作が行えるようになる。

<small>`src/try/try13.ts`</small>

```ts
const point = (value: number | string): number => {
  // return value.length // Number.prototype.length が無いため呼び出せない
  if (typeof value === 'number') {
    // number 型
    return value
  }
  // string 型
  return value.length
}

console.log(point(100))
console.log(point('100'))

// nullable
let isNull: boolean | null = true
isNull = null // エラーにならない
```

---

### 省略可能なプロパティ
Union Types と似ているが、こちらは定義しなくてもいいプロパティを表すときのみ使用できる。

<small>`src/try/try14.ts`</small>

```ts
type Human = {
  name: string
  organization?: string
}
const mushoku: Human = { name: '無職の男' } // organization プロパティを定義しなくても OK
console.log(mushoku.name) // => 無職の男
```

---

### デコレータ
~~TypeScript の機能というよりは ES プロポーザルというツッコミはおいといて~~

簡単に言うと、クラスやメソッドなどに適用できる関数。
Java で言うアノテーション。

コンパイラオプションを指定すると利用可能になる。

<small>参考：https://qiita.com/taqm/items/4bfd26dfa1f9610128bc</small>

---

<small>`src/try/try15.ts`</small>

```ts
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
```

---

## ここまでのまとめ（言語機能編）
* ジェネリクスが使用できる
* 「○○または☓☓」という型定義ができる
* モジュールに外部から型をつけられる
* `typeof` で変数の型が取得できる

---

## TypeScript のチュートリアル部分は終わり

---

# 「TypeScript 完全に理解した」

---

### ハンズオン
実際に JavaScript に型をつけてみる。

---

### 問題
* Q1. 基本的な型の付け方
* Q2. nullable な型の付け方（Union Types）
* Q3. 配列の型の付け方（ジェネリクス）
* Q4. クラスの作り方
* Q5. オブジェクトの型付け
* Q6. 型の絞り込み

<small>物足りない方はこちら！</small>
<small>https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a</small>
<small>今回説明した内容以外にもいろいろ書いてある。</small>

---

## 基本的な型付けについてはこれで終わり

---

# 第二部：Vue.js ＋ TypeScript

---

### Vue.js 編はさらっと
Vue.js 自体触ったことがない方もいると思うので、劇的？ ビフォーアフターだけ。

---

### Before（JavaScript）
※サンプルファイルなし

```js
<script>
import MyComponent from 'my-component'

export default {
  components: {
    MyComponent
  },
  props: {
    text: {
      type: String,
      required: true,
      default: 'default text'
    }
  },
  methods: {
    handleClick() {
      console.log('click')
      this.$emit('clicked')
    }
  },
  computed: {
    computedMessage() {
      return 'computed'
    }
  },
  watch: {
    text() {
      console.log('changed')
    }
  }
}
</script>
```

---

### After（TypeScript）
※サンプルファイルなし

```ts
<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator'
import MyComponent from 'my-component'

@Component({
  components: {
    MyComponent
  }
})
export default class App extends Vue {
  @Prop({ default: 'default text' })
  text!: string

  handleClick() {
    console.log('click')
    this.clicked()
  }

  get computedMessage() {
    return 'computed'
  }

  @Emit()
  clicked() {
    return 'clicked'
  }

  @Watch('text')
  watchText() {
    console.log('changed')
  }
}
</script>
```

---

### まとめ
いかがでしたか？（様式美）

最初は `any` を多用しても大丈夫。徐々に型システムに慣れていけば問題ないと考えている（もちろんデメリットが許容できれば）。

---

TypeScript を導入するが、引き続き JavaScript を書くこともできるように設定する予定。

わからない場合は JavaScript で書くのも手。

TypeScript の型はかなり複雑なこともできるため、いろいろ試してみるといいかもしれない。

---

#### 例
* 型で階乗
    * https://nekko1119.hatenablog.com/entry/2019/04/24/010641
* ポーカーの役判定
    * https://qiita.com/suin/items/a68116a6c0ac81ea7ca7
* 足し算・掛け算・乗算を 1 つの型でやる
    * https://qiita.com/kgtkr/items/4fd2665db692bbf93a15

+++

### 余談 1：他の言語にあるやつ
* enum ある
* interface ある（type とほぼ同義）
* constructor 引数をフィールドに直接定義・代入するやつある（Kotlin とか）
* オーバーライドある
* オーバーロードある
    * 演算子オーバーロードはない

+++

### 余談 2：JavaScript に戻れなくなりそう
書き心地という点では戻れなくなる人が多数いる（らしい）。
ただ、ちょっとしたスクリプトを書くときは JavaScript で書くこともある。

+++

また、TypeScript に移行したプロジェクトにおいて、「やっぱり JavaScript に戻したい！」というニーズもある（らしい）。

そんなときでも、コンパイル後のソースを見れば分かる通り、かなりきれいな JavaScript コードが生成される。

JavaScript に戻したいときでも、コンパイラオプションをしっかり調整すれば、JavaScript に戻すのもかなり楽に行える。

---

# よい TypeScript ライフを！

+++

### 参考
* TypeScriptの型入門
  * https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a
* 初心者のためのTypeScript入門
  * https://www.tuyano.com/index2?id=12926003
* TypeScript + Vue.js の始め方
  * https://blog.asial.co.jp/2019/05/07/TypeScript_%2B_Vue_js_%E3%81%AE%E5%A7%8B%E3%82%81%E6%96%B9
* TypeScriptのMethod Decoratorを解説する。
  * https://qiita.com/ukiuni@github/items/8753c762abd7af831afe
