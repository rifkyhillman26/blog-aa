---
id: menginstall-express-js
title: Menginstall Express JS
author: Asrul Harahap
author_title: React Developer
author_url: https://github.com/talkasrul
author_image_url: https://avatars2.githubusercontent.com/u/15111402?s=460&v=4
tags: [nodejs, backend, express]
---

Untuk menggunakan express js, sebelumnya kamu harus pastikan bahwa di laptop telah terinstall Node Js dan NPM.

Buka terminal dan buat sebuah folder tempat kamu akan meletakkan project tersebut.
<!--truncate-->

![Project Express](https://raw.githubusercontent.com/talkasrul/step-2/master/week-1/assets/project-express.png)

Setelah itu buat initial project dengan perintah berikut.

```bash
npm init
```

atau 

```bash
npm init -y
```

Jika menggunakan `-y`, kamu setuju dengan generate otomatis yang dilakukan npm untuk membuat file **package.json**

![Project Express](https://raw.githubusercontent.com/talkasrul/step-2/master/week-1/assets/project-express.png)

File package.json adalah file yang berisi semua informasi package atau library yang dipakai untuk membuat atau membangun aplikasi atau web tersebut.

Sejauh ini kita sudah berhasil untuk membuat project yang akan dibangun, selanjutnya kita akan mengistall `express js`, cara installnya berikut ini.

```bash
npm install express --save
```

![Install Express](https://raw.githubusercontent.com/talkasrul/step-2/master/week-1/assets/install-express.png)

Kalau dilihat kembali file `package.json` maka akan ada express yang baru saja kita install.

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
    "express": "^4.17.1"
  }
}
```

Kamu selesai melakukan install express js, silahkan cobakan dan tanyakan intriktur jika ada yang belum dimengerti.. :smile:
