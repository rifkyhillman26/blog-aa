---
id: membuat-web-server
title: Membuat Web Server
author: Asrul Harahap
author_title: React Developer
author_url: https://github.com/talkasrul
author_image_url: https://avatars2.githubusercontent.com/u/15111402?s=460&v=4
tags: [nodejs, backend, express]
---

Web server adalah server yang bertugas untuk menjalankan web agar dapat melakukan request dari user dan memberikan response sebagai keluaran.

Setelah menginstall express js, sekarang buatlah file baru dengan nama `server.js` yang isinya sebagai berikut.

<!--truncate-->

```js
const express = require('express')
const app = express()

app.listen(5000, (req, res) => {
  console.log('Server is running with http://localhost:5000')
})
```

Setelah itu jalankan server dengan perintah

```bash
node server.js
```

maka hasilnya seperti berikut ini

![Web Server Express](https://raw.githubusercontent.com/talkasrul/step-2/master/week-1/assets/server-express.png)
