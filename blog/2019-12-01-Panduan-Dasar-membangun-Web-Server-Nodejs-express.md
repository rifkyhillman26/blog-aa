---
id: panduan-dasar-membangun-web-server-nodejs-express
title: Panduan Dasar membangun Web Server Nodejs - express
author: Asrul Harahap
author_title: React Developer
author_url: https://github.com/talkasrul
author_image_url: https://avatars2.githubusercontent.com/u/15111402?s=460&v=4
tags: [nodejs, backend, express]
---

Hampir semua karir saya, saya telah bekerja secara eksklusif sebagai frontend (sisi client). Merancang layout, responsif, membuat komponen, dan lainnya. Karena itu saya hampir tidak pernah berurusan dengan request routing atau HTTP secara langsung.
<!--truncate-->

## Dasar-dasar Jaringan

HTTP (Hypertext Transfer Protocol) adalah protocol komunikasi yag digunakan dalam jaringan komputer. Internet sendiri memiliki banyak protokol seperti SMTP (Simple Mail Transfer Protocol), FTP (File Transfer Protocol), POP3 (Post Office Protocol 3) dan lainnya.

Protokol-protokol ini memungkinkan perangkat dengan hardware atau software yang berbeda dapat berkomunikasi satu sama lain karena memberikan format pesan yang jelas, aturan, sintaks, dll. Ini berarti selama perangkat mendukung protokol tersebut, maka ia dapat berkomunikasi dengan pernagkat lainnya dalam jaringan.

![OSI layer](https://cdn-images-1.medium.com/max/800/1*4zmaQ7kp-1y8UA960iMO4w@2x.png)

Sumber: Medium

Sistem operasi biasanya menyediakan dukungan HTTP sehingga tidak perlu mengistall aplikasi tambahan untuk mengakses web.

HTTP, yang digunakan untuk menjalankan web, berbeda. Ini dikenal sebagai protokol tanpa koneksi, karena didasarkan pada mode operasi permintaan / response. Browser web membuat permintaan ke server untuk gambar, font, konten dll. Tetapi begitu permintaan terpenuhi, koneksi antara browser dan server terputus.

![HTTP Request Response](https://raw.githubusercontent.com/talkasrul/fakedb/master/http.png)

## Server dan Client

Istilah server mungkin sedikit membingungkan bagi orang yang baru mengenal industri karena dapat merujuk pada perangkat keras (komputer fisik yang menampung semua file dan perangkat lunak yang diperlukan oleh situs web) atau perangkat lunak (program yang memungkinkan pengguna untuk mengakses file-file itu di web ).

Hari ini, kita akan berbicara tentang sisi perangkat lunak. Tetapi pertama-tama, beberapa definisi. URL adalah singkatan dari `Universal Resource Locator`, dan terdiri dari 3 bagian: protokol , server dan file yang diminta .

![Anatomi URL](https://raw.githubusercontent.com/talkasrul/fakedb/master/url.png)

Protokol HTTP mendefinisikan beberapa metode yang dapat digunakan browser untuk meminta server melakukan banyak tindakan berbeda, yang paling umum adalah GET dan POST. Saat pengguna mengklik tautan atau memasukkan URL di field alamat, browser mengirim GET request ke server untuk mengambil resource yang ditentukan dalam URL.

Server perlu tahu cara memproses HTTP request ini untuk mengambil file yang benar kemudian mengirimkannya kembali ke browser yang memintanya sebagai response.

![Web Server](https://raw.githubusercontent.com/talkasrul/fakedb/master/web-server.png)

## Membuat server HTTP dengan Express

Berikut cara membuat server dengan express

```js
const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/index.html')
})

app.listen(5000)
```