---
id: belajar-react-untuk-pemula
title: Belajar React untuk Pemula
author: Asrul Harahap
author_title: React Developer
author_url: https://github.com/talkasrul
author_image_url: https://avatars2.githubusercontent.com/u/15111402?s=460&v=4
tags: [javascript, react, teori]
---

React adalah *open source* yang sangat membantu untuk membangun *User Interface* (UI) lebih mudah dan cepat. Jalur pembelajaran ini akan mencakup berbagai API dan tool harus dipertimbangkan untuk meningkatkan kinerja dan kegunaan aplikasi.

Panduan ini akan menunjukkan cara untuk bangkit dan berjalan denan aplikasi React. Setiap panduan lain pada buku ini akan membahas topik untuk mengoptimalkan kecepatan atau aksesibilitas aplikasi React.

<!--truncate-->

### Apa yang akan kamu pelajari?

Tutorial pada buku ini *tidak hanya fokus* pada:

- Cara menggunakan React
- Bagaimana React bekerja
- Cara membuat Component React
- Penggunaan Props dan State


### Membuat Aplikasi React

Create React App ([CRA](https://facebook.github.io/create-react-app/)) adalah cara termudah untuk memulai membangun aplikasi React. Ini memberikan pengaturan *default* dengan sejumlah fitur inti yang digunakan, termasuk sistem `build` yang berisi `bundler module` (webpack) dan transpiler (Babel).

Pada `shell` atau terminal, Anda hanya perlu menjalankan perintah berikut untuk membuat aplikasi baru:

```bash
create-react-app nama-aplikasi
```

> Pastikan terlebih dahulu untuk sudah menginstalkan CRA pada komputer anda dengan `sudo yarn global add create-react-app` atau `sudo npm install -g create-react-app`

Setelah perintah diatas selesai dieksekusi, Anda dapat menjalankan aplikasi dengan perintah berikut:

```bash
cd nama-aplikasi
yarn start
```
atau

```bash
npm start
```

Berikut memperlihatkan halaman aplikasi React yang baru saja dibuat.

![React Js](https://raw.githubusercontent.com/asruldev/react-series/master/lib/first-install.png)

Berikut memperlihatkan struktur direktori dan halaman web aktual dari aplikasi CRA yang baru saja dibuat.

```bash
.
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── serviceWorker.js
└── yarn.lock
```

> Meskipun CRA membuatnya mudah untuk mulai membangun aplikasi React, ada banyak cara berbeda untuk mulai membangun situs dengan React. Bisa menggunakan CDN atau lainnya.

Struktur direktori aplikasi CRA baru hanya berisi file yang benar-benar perlu Anda modifikasi untuk bekerja pada aplikasi Anda. [Dokumentasi CRA](https://facebook.github.io/create-react-app/docs/folder-structure) menjelaskan ini secara rinci.


### Component

Component dalam react dapat dibuat dengan 2 cara, yaitu dengan membuat `class` atau dengan membuat `function`. Tapi apa bedanya  `class` dengan `function`, pasti memiliki kelebihan masing-masing.

1. Dengan class
Membuat component dengan `class` pada react disebut sebagai `component state full` karena dengan `class` Anda bisa membuat `state` sesuai kebutuhan. 

```javascript
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }
  
  render() {
    return (
      <div>Wellcome Asrul</div>
    )
  }
}

export default App
```

2. Dengan function (ini akan dibahas lanjut pada pembahasan hooks)
Membuat component dengan `function` pada react disebut sebagai `component state less` karena dengan `function` Anda tidak bisa membuat `state` tetapi bisa menerima `props` saja. 

```javascript
import React from 'react'

const Hello = ({ name }) => (<div>Hello, {name}!</div>);

export default Hello
```

Lantas bagai mana cara mengaksesnya?
Okay, cara mengakses komponen adalah dengan menjadikannya sebagai tag HTML, contoh component Hello akan diakses menjadi `<Hello />`

> Perlu diingat bahwa component harus diawali dengan huruf kapital sehingga sistem dapat membedakan code HTML dan kode Component

### Props
Props adalah cara component mengoper data yang berasal dari *parent* ke *child* dengan kata lain garis lurus kebawah.

```javascript
<Hello name="Asrul">
```
Dari component diatas misal sebuah component `Hello` dengan propertu **name** pada kode diatas, maka itu akan menurunkan data pada child `Hello` dengan props dengan `key` **name** dan `value` **Asrul**

### Mengakses Props
Pada induk telah mengover data dengan key **name** dan value **Asrul**, maka pada child akan bisa diakses dengan cara:

```javascript
import React from 'react'

const Hello = ({ props }) => (<div>Hello, {props.name}!</div>);

export default Hello
```

### Validasi Props

Validasi pada props adalah cara yang sangat berguna untuk memaksa penngunaan komponen yang benar. Ini akan sangat membantu selama pengembangan untuk menghindari bug dan masalah yang akan mungkin terjadi setelah aplikasi menjadi lebih besar. Dengan validasi ini juga akan membuat pembacaan kode lebih mudah dipahami, karena dapat melihat bagaimana komponen harus digunakan.

```javascript
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <h3>Array: {this.props.propArray}</h3>
          <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
          <h3>Func: {this.props.propFunc(3)}</h3>
          <h3>Number: {this.props.propNumber}</h3>
          <h3>String: {this.props.propString}</h3>
          <h3>Object: {this.props.propObject.name}</h3>
      </div>
    )
  }
}

App.propTypes = {
  propArray: React.PropTypes.array.isRequired,
  propBool: React.PropTypes.bool.isRequired,
  propFunc: React.PropTypes.func,
  propNumber: React.PropTypes.number,
  propString: React.PropTypes.string,
  propObject: React.PropTypes.object
}

App.defaultProps = {
  propArray: [1,2,3,4,5],
  propBool: true,
  propFunc: function(e){return e},
  propNumber: 1,
  propString: "String value...",
  
  propObject: {
    name: "Asrul Harahap"
  }
}
export default App;
```

### State
State adalah tempat Anda menyimpan data pada component dan hanya bisa diakses oleh component itu sendiri secara default, tetapi bisa diturunkan pada child jika menggunkan props.

```javascript
state = {
  name: ''
}
```

### Mengubah Nilai State
Untuk mengubah nilai state telah diberikan method dari react menggunakan `setState`, berikut cara penggunaannya.
```javascript
this.setSetate({
  name: 'Asrul'
}, callback)
```

### Mengakses State
Anda telah mengetahui bagaimana cara mengubah nilai state, kemudian pada tahap ini, Anda akan membutuhkan cara mengakses state, hampir mirip dengan props, berikut caranya.
```javascript
import React, { Component } from 'react'

class Hello extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }
  
  componentDidMount() {
    this.setState({
      name: 'Asrul H',
    })
  }
  
  render() {
    return (
      <div>Wellcome {this.state.name}</div>
    )
  }
}

export default Hello
```

Semoga bermanfaat, :)