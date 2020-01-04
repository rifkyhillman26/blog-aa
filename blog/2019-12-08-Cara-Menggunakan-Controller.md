---
id: menggunakan-controller-express
title: Menggunakan Controller Express
author: Asrul Harahap
author_title: React Developer
author_url: https://github.com/talkasrul
author_image_url: https://avatars2.githubusercontent.com/u/15111402?s=460&v=4
tags: [nodejs, ejs, express]
---

Setelah kita pisahkan file server dan router, ternyata router kita masih melakukan proses logika yang segharusnya hanya dilakukan oleh controller.

Berdasarkan code pada file `router.js` yang sebelumnya.

<!--truncate-->

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

Ubah `router.js` dan tambahkan file `controller.js` sehingga menjadi.

### Router.js

```js
const router = require('express').Router()
const { 
    index,
    profile,
    login,
    about} = require('./controller')

router.get('/', index)
router.get('/profile', profile)
router.get('/login', login)
router.get('/about', about)

module.exports = router
```

### Controller.js

```js
const index = (req, res) => {
    res.send('ini rute utama atau root')
}

const profile =  (req, res) => {
    res.redirect('/login')
}

const login = (req, res) => {
    res.send('silahkan Login terlebih dahulu')
}

const about = (req, res) => {
    res.send('ini rute /about ' + req.query.name + ' dan umurnya ' + req.query.age)
}

module.exports = {
    index,
    profile,
    login,
    about
}
```

Jika tidak ada kesalahan dalam penulisan code, maka hasilnya akan sama dengan yang sebelumnya.
