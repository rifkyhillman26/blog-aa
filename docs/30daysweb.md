---
id: 30daysweb
title: 30 Hari Javascript
sidebar_label: 30 Hari Javascript
---

## Hari 1

Update: Minggu, 05 Januari 2020

### Pengantar
Semamat bagi teman-teman yang memutuskan untuk mengikuti series pembelajaran **javascript** ini, Pada series ini Anda akan belajar Javascript dari dasar hingga tingkat menengah. Dan pada akhir series ini Anda akan diminta untuk membuat sebuah proyek akhir, yang dikirimkan ke email [talkasrul@gmail.com](mailto:talkasrul@gmail.com). Ini hanya menguji tingkat keseriusan anda dalam mengikuti pembelajaran saja.

Untuk diskusi saya telah siapkan group [Telegram](https://t.me/joinchat/KEE0phS9ZCuR8O7a8F31qA)

Jika Anda suka tulisan saya dan ingin berdonasi, dipersilahkan.

1. Ovo **39358 081211752502** 
2. Shopeepay **122 081211752502**
3. BCA **5325 058851**

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

### Tipe Data
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

### Komentar
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

### Variable
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
Update: Senin, 06 Januari 2020

### Tipe Data non-Primitif
Kemarin kita sudah bahas beberapa jenis tipe data primitif, selain itu ada juga tipe data referensi atau non-primitif, berdiri berdasarkan tipe data lain, yaitu:

1. Array
2. Object
3. Function

Tipe data non-primitif dapat dimodifikasi atau diubah. Kita dapat memodifikasi nilai tipe data non-primitif setelah dibuat. Mari kita lihat dengan membuat sebuah array. **Array** adalah daftar nilai data yang kiapit oleh tanda kurung siku dan dipisahkan tanda koma. Array dapat berisi tipe data yang sama atau berbeda. Nilai array dirujuk oleh indeks masing-masing data. Dalam indeks array JavaScript dimulai dari nol. Yaitu, elemen pertama dari sebuah array ditemukan di indeks nol, elemen kedua di indeks satu, dan elemen ketiga di indeks dua, dan selanjutnya.

```js
let siswa = ["Asrul", "Anis", "Tisha", "Rifky"]
console.log(siswa[1])
// hasilnyya: Anis
```

Tipe data non primitif tidak bisa dibandingkan, bahkan walau nilainya sama.

```js
let nilai = [1, 2, 3]
let angka = [1, 2, 3]

console.log(nilai === angka)
// hasilnya: false
```
> Array akan kita bahas nanti, untuk sekarang kita skip dahulu.

### Number
Sedikit telah dibahas pada hari pertama bahwa tipe data number berupa bilangan bulat dan pecahan atau desimal baik negatif maupun positif beserta dengan nol.

Contoh

```js
let panjang = 30
let lebar = 21.52
let luas = panjang * lebar
console.log("Luas adalah ", luas)
// Hasilnya: Luas adalah 645.6
```

Anda dapat melakukan operasi matematik baik bilangan desimal dengan desimal atau dengan bilangan bulat.

### Math
Pada javascript telah disediakan **object match** yang berfungsi sebagai alat bantu dalam urusan kalkulasi matematik seperti max, min, random, pow, dll.

Method | Keterangan
-------| ---------
Math.PI | PI adalah rasio keliling lingkaran terhadap diameternya; sekitar 3.14159.
Math.round | Pembulatan nilai keangka terdekat
Math.floor | Membulatkan nilai kebawah
Math.ceil | Membulatkan nilai keatas
Math.min | Mencari angka terkecil dari deretan angka
Math.max | Kebalikan dari Math.min, mencari yang terbesar
Math.random | Mencari nilai acak berupa 0 to 0.999999999...
Math.sqrt | Mencari nilai akar dari angka yang didefenisikan

Ada banyak lagi method matematik yang disediakan oleh javascript, silahkan baca di [sini](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)


Contoh penggunaan pada soal berikut.

Jika diketahui sebuah lingkaran mempunyai diameter 14 cm. Berapakah luas lingkaran tersebut?

Penyelesaian:

Diketahui:

d = 14 cm

karena d = 2 × r maka:

r = d/2

r = 14/2

r = 7 cm

Ditanyakan: Luas lingkaran?

Jawab:

Luas = π × r²

Luas = 22/7 × 7²

Luas = 154 cm²

Jadi, luas lingkaran tersebut adalah 154 cm².

```js
let d = 14
let r = d/2
let luas = Math.PI * r * r
console.log(luas)
// hasilnya: 153.93804002589985
console.log(Math.round(luas))
// hasilnya 154
```

Referensi pendukung untuk number baca di [sini](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

### String

Pada bagian ini kita akan perdalam lagi materi **String** yang telah kita bahas sebelumnya. String didefenisikan harus menggunakan tanda kutif tunggal, dobel atau backtik.

```js
let nama = "Asrul Harahap"
let alamat = `Jl. Tanah Kusir II
             Gang Pramuka II
             Kelurahan Kebayoran Lama Selatan
             Kecamatan Kebayoran Lama
             Kota Jakarta Selatan
             DKI Jakarta - 12240
             Indonesia           
`
let pekerjaan = 'Full Stack Developer'
```

Anda dapat menggabung dua string atau lebih yang disebut dengan string concat.

```js
let firstName = "Asrul"
let lastName = "Harahap"
let fullName = firstName + " " + lastName
console.log(fullName)
// hasil: Asrul Harahap

console.log(`${firstName} ${lastName}`)
// hasil: Asrul Harahap
```

Pada contoh ada penggunaan `${variable}` ini adalah salahsatu cara menggunakan concat string javascript yang disebut dengan **template literal**. Anda bebas menggunakan cara pertama atau kedua, sesuai nyamannya Anda dalam ngoding.

#### 1. .length
String memiliki properti .leng yang berfungsi untuk menghitung jumlah karakter pada string.

```js
let nama = "Anis Fikriyyah"

console.log(nama.length)
// hasil: 14
```

#### 2. .toUpperCase()
toUpperCase() digunakan untuk mentranform string menjadi huruf besar semua

```js
let nama = "Anis Fikriyyah"

console.log(nama.toUpperCase())
// hasil: ANIS FIKRIYYAH
```

#### 3. .toLowerCase()
Ini merupakan kebalikan dari .toUpperCase(), yaitu mentransform string menjadi huruf kecil semua.


#### 4. .substr() 
substr digunakan untuk mengiris atau memotong karakter, ini membutuhkan 2 argumen yaitu indeks mulai dan jumlah karakter yang diiris.

```js
let nama = 'Anis Fikriyyah'
console.log(string.substr(5,6))    
// hasil: Fikriy
```
Perhatikan gambar berikut

![Substr](https://raw.githubusercontent.com/AsrulLove/img-db/master/substr.png)

#### 5. .split()
split ini digunakan untuk menjadikan string menjadi potongan array.

```js
let nama = 'Asrul Harahap'

console.log(string.split(' '))  
// hasil: ["Asrul", "Harahap"]

let firstName = 'Asrul'

console.log(firstName.split(''))  
// hasil: ["A", "s", "r", "u", "l"]

let countries = 'Asrul, Anis, Tisha, Lan, Rifki'

console.log(countries.split(','))
// hasil: ["Asrul", "Anis", "Tisha", "Lan", "Rifki"]
```

#### 6. .trim()
Digunakan untuk menghapus spasi berlebih diawal atau diakhir string

```js
let nama = "   Anies Baswedan                     "

console.log(nama)
// hasil:    Anies Baswedan                      
console.log(string.trim())
// hasil: Anies Baswedan
```

#### 7. .repeat()
Dari namanya sudah bisa kita tebak gunanya untuk apa, ya benar gunanya untuk mengulang string sebanyak yang didefenisikan.

```js
let mood = 'bahagia'
console.log(url.repeat(10)) 
// hasil: bahagiabahagiabahagiabahagiabahagiabahagiabahagiabahagiabahagiabahagia
```

Masih banyak lagi method pada string seperti indexOf, replace, dll. Anda bisa baca selengkapnya di [sini](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)


## Hari 3
Coming Soon Boolean, Operator ...