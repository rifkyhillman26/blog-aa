---
id: menggunakan-ejs
title: Menggunakan EJS
author: Asrul Harahap
author_title: React Developer
author_url: https://github.com/talkasrul
author_image_url: https://avatars2.githubusercontent.com/u/15111402?s=460&v=4
tags: [nodejs, ejs, express]
---

EJS adalah library yang digunakan untuk menrender html, ada yang bilang E pada EJS adalah embed sehingga menjadi Embed JS ada juga yang bilang E adalah easy, dan terserah gak peduli, yang penting bisa membentu pekerjaan develop kita.

<!--truncate-->

### Install EJS

Cara install `ejs` sama halnya dengan menginstall `express`, kita lakukan dengan terminal.

```bash
npm install ejs --save
``` 

Cek apakah sudah terinstall pada `package.json`

```json
{
  "name": "belajar-express",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "ejs": "^2.6.2",
    "express": "^4.17.1"
  }
}
```

### Setting EJS pada Server

Agar server dapat mengetahui template engine yang digunakan maka tambahkan kode set ejs pada server sehingga menjadi seperti berikut.

```js
const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use('/', require('./router') )

app.listen(5000, (req, res) => {
  console.log('Server is running with http://localhost:5000')
})
```

Setelah itu secara otomatis server akan mencari folder dengan nama views sebagai tempat penyimpanan file-file template html dalam bentuk .ejs

Contoh

Ubah kode berikut pada controller

```js
const index = (req, res) => {
    res.render('page/home')
}
```

dan buatlah file `home.ejs` dalam folder views/page/

```ejs
<h1> Hello Asrul </h1>
```

Sehingga jika server dijalankan akan menghasilkan seperti berikut ini.

![Hello Asrul](https://raw.githubusercontent.com/talkasrul/step-2/master/week-1/assets/result-home.png)
