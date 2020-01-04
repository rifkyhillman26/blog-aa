---
id: mengenal-response-express-js
title: Mengenal Response Express JS
author: Asrul Harahap
author_title: React Developer
author_url: https://github.com/talkasrul
author_image_url: https://avatars2.githubusercontent.com/u/15111402?s=460&v=4
tags: [nodejs, backend, express]
---

Sama halnya dengan request, `function` response sangat banyak yang disedikan oleh express.

Properti | Deskripsi
------|--------
.send() | Mengirim dan menampilkan data string ke user
.end() | Mengakhiri response server
.status() | Informasi HTTP status, seperti 200, 404, dll
.json() | Menjadikan response sebagai data JSON
.render() | Merender file sebagai HTML
.download() | Memberikan response sebagai file yang dapat diunduh
.type() | Menyetting tipe response server
.redirect() | Mengalihkan halaman ke halaman yang lain
<!--truncate-->

contoh penggunaan `.redirect()`

```js
app.get('/profile', (req, res) => {
    res.redirect('/login')
})

app.get('/login', (req, res) => {
    res.send('silahkan Login terlebih dahulu')
})
```

hasilnya berikut

![Video Redirect](https://raw.githubusercontent.com/talkasrul/step-2/master/week-1/assets/redirect-response.gif)

Silahkan cobakan dan baca cara penggunaannya dari beberapa sumber, seperti [expressjs.com](https://expressjs.com) atau serching dari googl*
