---
id: menggunakan-router-express
title: Menggunakan Router Express
author: Asrul Harahap
author_title: React Developer
author_url: https://github.com/talkasrul
author_image_url: https://avatars2.githubusercontent.com/u/15111402?s=460&v=4
tags: [nodejs, ejs, express]
---

Router telah kita bahas pada awal pembuatan server, apa gunanya dan bagaimana pembuatannya. Tetapi kita menuliskannya pada file yang sama dengan server, sehinnga jika aplikasi web tersebut semakin besar maka pengelolaannya akan semakin sulit. Untuk itu kita akan pisahkan sfile yang menangani `server` dan file yang menangani `router`.

<!--truncate-->

Berikut adalah kode pada file `server.js` yang telah dibuat.

```js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('ini rute utama atau root')
})

app.get('/profile', (req, res) => {
    res.redirect('/login')
})

app.get('/login', (req, res) => {
    res.send('silahkan Login terlebih dahulu')
})

app.get('/about', (req, res) => {
    res.send('ini rute /about ' + req.query.name + ' dan umurnya ' + req.query.age)
})

app.listen(5000, (req, res) => {
  console.log('Server is running with http://localhost:5000')
})
```

Mita akan pisahkan menjadi 2 file dengan nama file `server.js` dan `router.js`

### server.js

```js
const express = require('express')
const app = express()

app.use('/', require('./router') )

app.listen(5000, (req, res) => {
  console.log('Server is running with http://localhost:5000')
})
```

### router.js

```js
const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('ini rute utama atau root')
})

router.get('/profile', (req, res) => {
    res.redirect('/login')
})

router.get('/login', (req, res) => {
    res.send('silahkan Login terlebih dahulu')
})

router.get('/about', (req, res) => {
    res.send('ini rute /about ' + req.query.name + ' dan umurnya ' + req.query.age)
})

module.exports = router
```

Jika dijalankan maka akan menghasilkan hal yang sama dengan sebelumnya, tetapi penulisan lebih rapi.
