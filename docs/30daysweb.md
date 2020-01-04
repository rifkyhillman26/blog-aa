---
id: 30daysweb
title: 30 Hari Membangun Web Javascript
sidebar_label: 30 Hari Javascript
---

![Asrul Harahap](https://avatars2.githubusercontent.com/u/15111402?s=46&v=4)

Saya Asrul Harahap, seorang developer js khususnya React Js.
Jika Anda suka tulisan saya dan ingin berdonasi, dipersilahkan.

1. Ovo **39358 081211752502** 
2. Shopeepay **122 081211752502**
3. BCA **5325 058851**

## Hari 1

### Pengantar
Semamat bagi teman-teman yang memutuskan untuk mengikuti series pembelajaran **javascript** ini, Pada series ini Anda akan belajar Javascript dari dasar hingga tingkat menengah. Dan pada akhir series ini Anda akan diminta untuk membuat sebuah proyek akhir, yang dikirimkan ke email [talkasrul@gmail.com](mailto:talkasrul@gmail.com). Ini hanya menguji tingkat keseriusan anda dalam mengikuti pembelajaran saja.

Untuk diskusi saya telah siapkan group [Telegram](https://t.me/joinchat/KEE0phS9ZCuR8O7a8F31qA)

### Persyaratan
Untuk mengikuti series ini Anda perlu:

1. Motivasi yang tinggi
2. Laptop dengan OS apasaja (rekomendasi: Linux)
3. Koneksi Internet
4. Browser (rekomendasi: Google Chrome)
5. Teks Editor (rekomendasi: VS Code)
6. Kopi dan Snek (optional)

### Persiapan

#### Instal NodeJS
Unduh atau download file untuk instal node js pada link [ini](https://nodejs.org/en/). Silahkan download sesuai OS Anda, disarankan mendownload nodejs dengan versi yang LTS.

![Web Node JS](https://raw.githubusercontent.com/AsrulLove/img-db/master/nodejsweb.png)

Double Click file yang telah didownload dan ikuti intruksi instal nodejs hingga selesai.
Jika instal nodejs selesai dapat dicek dengan cara mengetikkan perintah ini diterminal.

```bash
node -v
```

Jika versi nodejs tersedia, maka dapat disimpulkan bahwa instalasi nodejs berhasil.

#### Instal VS Code
VS Code adalah aplikasi teks editor yang akan kita gunakan untuk menuliskan kode. Silahkan download di [sini](https://code.visualstudio.com/).

![VS Code](https://raw.githubusercontent.com/AsrulLove/img-db/master/downloadvscode.png)

Install hingga selesai, dan tampilannya seperti berikut ini.

![VS Code](https://raw.githubusercontent.com/AsrulLove/img-db/master/ovscode.png)

#### Instal Google Chrome
Ada banyak sekali browser seperti Firefox, Opera, Edge, Internet Explorer dll, tapi saya sangat merekomendasikan google chrome. Mungkin juga Anda sudah menggunakannya. Bagi yang belum silahkan download di [sini](https://www.google.com/chrome/) 

![G Chrome](https://raw.githubusercontent.com/AsrulLove/img-db/master/gchromedownload.png)

Ikuti langkah demi langkah dan selesaikan instal google chrome.

#### Menggunakan Chrome Console

Untuk membuka Chrome Console, klik kanan pada chrome, kemudian pilih inspect.

![Inspect](https://raw.githubusercontent.com/AsrulLove/img-db/master/inspect.png)

Maka hasilnya akan seperti berikut.

![Console](https://raw.githubusercontent.com/AsrulLove/img-db/master/gconsole.png)

#### Uji Kode Pada Chrome Console

Silahkan tuliskan kode berikut untuk menguji konsol dapat digunakan dengan baik.

```js
console.log('Belajar Bersama Asrul Dev')
```

![Uji Console](https://raw.githubusercontent.com/AsrulLove/img-db/master/ujikonsole.png)


### Mengenal Javascript

Javascript adalah salah satu bahasa pemograman yang dapat dipakai sebagai bahasa Backend untuk REST API atau Web Server, bisa dipakai sebagai frontend untuk web, desktop, maupun mobile. Bahkan javascript juga bisa digunakan loh untuk robot dan AI.

Untuk lebih jelasnya tentang javascript silahkan baca-baca di google yah. :)

Buatlah folder dengan nama `30hari` sebagai tempat menyimpan file-file javascript `,js` yang kita gunakan untuk belajar. Kemudian arahkan pada terminal lalu buka VScode. Perhatikan gambar.

![Open Vscode](https://raw.githubusercontent.com/AsrulLove/img-db/master/open.png)

Setelah Vscode terbuka maka pilih new file untuk memulai belajar.

![File Baru](https://raw.githubusercontent.com/AsrulLove/img-db/master/filebaru.png)

> ekstensi yang digunakan `.js`

#### Tipe Data
Saya rasa semua bahasa pemrograman pasti ada yang namanya tipe data. Berikut ini adalah tipe data primitif JavaScript: `String`, `Number`, `Boolean`, `Undefined`, `Null` , dan `Symbol`.

##### Number
Number itu adalah tipe data yang dapat diproses matematika, seperti tambah, kali, bagi, dll.

1. Integer yaitu bilangan negatif, nol, positif: `-100, 0, 25`
2. Float yaitu bilangan negatif atau positif berkoma: `-2.12, 3.14`

##### String
String adalah sebuah karakter atau sekumpulan karakter yang ditulis diantara tanda kutif tunggal atau double atau bisa juga dengan tanda backtik.

'Asrul harahap'

"Belajar Javascript"

`Selamat Tahun Baru 2020`

##### Boolean
Boolean berupa pernyataan benar atau salah dengan nilai true atau false, biasanya digunakan untuk membandingkan atau mengecek kondisi, misal apakah hujan? bisa true atau bisa false.

##### Undefined
Dalam JavaScript, jika tidak menetapkan nilai ke variabel, maka nilainya `undefined`. Selain itu, jika suatu fungsi tidak mengembalikan atau return apa pun, maka nilai yang dikembalikan adalah `undefined`.

##### Null
Null adalah nilai kosong, ini mungkin akan dibahas sesuai kasus kedepannya.

#### Memeriksa Tipe Data
Javascript telah menyediakan kode untuk memeriksa tipe data yaitu `typeof`.

contoh

```js
console.log(typeof 2020)
console.log(typeof "Asrul Harahap")
console.log(typeof false)
```

Tulis contoh pada file `.js` kemudian simpan dan jalankan pada terminal seperti gambar berikut.

![Running Code](https://raw.githubusercontent.com/AsrulLove/img-db/master/running-code.png)

#### Komentar
Terkadang kita butuh catatan pada baris kode yang kita tulis guna untuk mengingatkan kita sebagai developer dan bukan untuk dieksekusi oleh program. Pada javascript memiliki beberapa cara untuk membuat Komentar.

1. Komentar 1 baris

```js
// Ini hanya komentar tidak dieksekusi
console.log('ini dieksekusi')
```

2. Komentar beberapa baris

```js
/**
 * conversi jam ke menit
 * param jam: number
 */
function hourToMinutes(hour) {
    return hour * 60
}
```

#### Variable
Variable adalah wadah yang dapat menyimpan data. Misal variabel nama berisi **Asrul Harahap**.

```js
var nama = "Asrul Harahap"
console.log(nama)
```

Variabel punya aturan dalam penulisan, yaitu:
1. Tidak boleh dimulai dengan angka
2. Tidak boleh menggunakan spasi
3. Tidak boleh menggunakan karakter khusus kecuali tanda dollar ($) dan garis bawah (_)

Penulisan variabel diawali kaya kunci atau keyword `var`, `let`, atau `const`.

```js
var alamat = "Jakarta Selatan"
let website = "http://asrul.dev"
const phi = 3.14
```

> Kapan untuk penggunaan var, let, dan const akan dibahas pada pembahasan lainnya. Sabar yah....

## Hari 2

Coming Soon

## Hari 3

Coming Soon

## Hari 4

Coming Soon

## Hari 5

Coming Soon

## Hari 6

Coming Soon

## Hari 7

Coming Soon

## Hari 8

Coming Soon

## Hari 9

Coming Soon

## Hari 10

Coming Soon

## Hari 11

Coming Soon

## Hari 12

Coming Soon

## Hari 13

Coming Soon

## Hari 14

Coming Soon

## Hari 15

Coming Soon

## Hari 16

Coming Soon

## Hari 17

Coming Soon

## Hari 18

Coming Soon

## Hari 19

Coming Soon

## Hari 20

Coming Soon

## Hari 21

Coming Soon

## Hari 22

Coming Soon

## Hari 23

Coming Soon

## Hari 24

Coming Soon

## Hari 25

Coming Soon

## Hari 26

Coming Soon

## Hari 27

Coming Soon

## Hari 28

Coming Soon

## Hari 29

Coming Soon

## Hari 30

Coming Soon