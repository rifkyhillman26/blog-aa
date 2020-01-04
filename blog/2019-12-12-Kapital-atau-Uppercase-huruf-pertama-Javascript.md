---
id: kapital-atau-uppercase-huruf-awal-Javascript
title: Kapital atau Uppercase huruf awal Javascript
author: Asrul Harahap
author_title: React Developer
author_url: https://github.com/talkasrul
author_image_url: https://avatars2.githubusercontent.com/u/15111402?s=460&v=4
tags: [javascript, teori]
---

JavaScript menawarkan banyak cara untuk memanfaatkan string untuk membuat huruf besar atau kapital pada karakter pertama. Ayo pelajari beberapa cara ini, dan cari tahu yang mana yang harus Anda gunakan, menggunakan JavaScript biasa.

Berikut caranya:

<!--truncate-->

### toUpperCase():

Fungsi ini berlaku pada string dan mengubah semua huruf menjadi huruf besar.

`string.toUpperCase()`

```js
let nama = "anis aikriyyah"
console.log(nama.toUpperCase())
// ANIS FIKRIYYAH
```

### slice():

Fungsi ini berlaku pada string dan memotong sesuai dengan parameter yang dikirimkan.

`string.slice(start, end)`

Keterangan:
- start: Parameter ini diperlukan. Ini menentukan posisi di mana untuk memulai pemotongan. Pengindeksan dimulai pada posisi 0.

- end: Ini adalah parameter opsional. Ini menentukan posisi dari mana untuk mengakhiri pemotongan (tanpa termasuk akhir). Jika parameter ini dihilangkan, Ini akan memilih semua karakter dari awal.

```js
let nama = "anis aikriyyah"
console.log(nama.slice(0, 4))
// anis
```

Untuk membuat tulisan **anis fikriyyah** menjadi **Anis fikriyyah** adalah dengan cara berikut:

```js
let nama = "anis fikriyyah"
let besar = nama.slice(0, 1).toUpperCase()
let kecil = nama.slice(1)

console.log(besar+kecil)
// Anis fikriyyah
```

### charAt():

Fungsi `.charAt()` ini mengembalikan karakter pada posisi atau index yang diberikan dalam string.

```js
let nama = "anis fikriyyah"
let besar = nama.charAt(0).toUpperCase()
let kecil = nama.slice(1)

console.log(besar+kecil)
// Anis fikriyyah
```

### replace():

Ini adalah fungsi bawaan dalam JavaScript yang digunakan untuk mengganti sepotong string dengan string lain atau ekspresi reguler (regex). String asli tidak akan terpengaruh.

```js
const nama = 'anis fikriyyah';
const hasil = nama.replace(/^\w/, c => c.toUpperCase());

console.log(hasil)
// Anis fikriyyah
```

Anda juga bisa menggunakan library seperti `lodash` dan lainnya, Misal dengan lodash

```js
var nama = 'anis fikriyyah';
console.log(_.capitalize(nama));
// Anis fikriyyah
```