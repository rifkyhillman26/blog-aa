---
id: membuat-rute-express-js
title: Membuat Rute Express JS
author: Asrul Harahap
author_title: React Developer
author_url: https://github.com/talkasrul
author_image_url: https://avatars2.githubusercontent.com/u/15111402?s=460&v=4
tags: [nodejs, backend, express]
---

Rute adalah jalan atau jalur yang mengarahkan user atau pengguna melakukan request ke web server sehingga mendapat response dari web server tersebut.

Untuk menjalankan rute ini terlebih dahulu kita harus memahami `HTTP Methode` secara sederhana.

1. GET
2. POST
3. PUT / PATCH
4. DELETE

<!--truncate-->

Penggunaan HTTP Methode ini pada express telah menyediakan `function` yang bisa dipakai yaitu: get() , post() , put() , delete() , patch().

```js
app.get('/', (req, res) => { /* */ })
app.post('/', (req, res) => { /* */ })
app.put('/', (req, res) => { /* */ })
app.delete('/', (req, res) => { /* */ })
app.patch('/', (req, res) => { /* */ })
```

Berikut cara penggunaannya:

```js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Halo Aa Academy, ini web pertama saya')
})

app.listen(5000, (req, res) => {
  console.log('Server is running with http://localhost:5000')
})
```

Jika server dijalankan maka hasilnya berikut ini
![Rute Pertama Saya](https://raw.githubusercontent.com/talkasrul/step-2/master/week-1/assets/rute-pertama.png)

Ubah kembali rute dan tambahkan rute /about sehingga kode menjadi seperti berikut

```js
...
app.get('/', (req, res) => {
    res.send('ini rute utama atau root')
})

app.get('/about', (req, res) => {
    res.send('ini rute /about')
})
...
```

Ketika server dijalankan, kita telah memiliki 2 rute yaitu rute `/` dan `/about`

![Rute Pertama Saya](https://raw.githubusercontent.com/talkasrul/step-2/master/week-1/assets/rute-utama.png)

dan

![Rute Pertama Saya](https://raw.githubusercontent.com/talkasrul/step-2/master/week-1/assets/rute-about.png)

Catatan:
- req adalah parameter yang berfungsi sebagai request dari user ke server
- res adalah parameter yang berfungsi sebagai response dari server untuk user

Jika ada yang belum mengerti silahkan tanyakan pada instruktur
