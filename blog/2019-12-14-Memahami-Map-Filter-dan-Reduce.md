---
id: memahami-map-filter-dan-reduce
title: Memahami Map, Filter dan Reduce
author: Asrul Harahap
author_title: React Developer
author_url: https://github.com/talkasrul
author_image_url: https://avatars2.githubusercontent.com/u/15111402?s=460&v=4
tags: [javascript, teori]
---

Metode ini bekerja dengan mendefinisikan titik awal. Ketika metode ini mengulangi setiap nilai, titik awal itu dimodifikasi dan diturunkan.

Contoh untuk menghitung sumbangan amal yang telah dilakukan oleh anak kelas XII RLP 2

<!--truncate-->

# Memahami Map, Filter dan Reduce

Kita akan belajar dan memahami cara menggunakan method `.map()`, `.filter()`, dan `.reduce()`, untuk membantu mempermudah loop atau perulangan dengan melakukan beberapa pernyataan lain.

## Map

Method `.map()` digunakan ketika Anda ingin:

1. melakukan serangkaian pernyataan dengan setiap nilai di iterable dan, 
2. mengembalikan nilai (mungkin) yang dimodifikasi.

Mari kita gunakan contoh sederhana penghitungan pajak penjualan berdasarkan serangkaian harga.

```js
const harga = [19.99, 4.95, 25, 3.50];
let hargaSekarang = [];
for(let i = 0; i < harga.length; i++) {
   hargaSekarang.push(harga[i] * 1.06);
}

console.log(hargaSekarang)
// [ 21.1894, 5.247000000000001, 26.5, 3.71 ]
```

Kami dapat mencapai hasil yang sama menggunakan `.map()`:

```js
const harga = [19.99, 4.95, 25, 3.50];
let hargaSekarang = harga.map(h => h * 1.06);

console.log(hargaSekarang)
// [ 21.1894, 5.247000000000001, 26.5, 3.71 ]
```

Method `.map()` diatas juga bisa dituliskan dengan cara berikut:

```js
const harga = [19.99, 4.95, 25, 3.50];
let hargaSekarang = harga.map( (h) => {
    return h * 1.06
});

console.log(hargaSekarang)
// [ 21.1894, 5.247000000000001, 26.5, 3.71 ]
```

## Filter

Method ini gunanya untuk memfilter dengan mengecek `true` atau `false` pernyataan yang dimasukkan saat perulangan.

Mari kita gunakan contoh menampilkan hanya bilangan bulat ganjil. Kita gunakan operator modulus (%) untuk menghitung sisa pembagian dengan 2. Ketika sisanya sama dengan 1, kita tahu jumlahnya ganjil.

```js
const bilangan = [1,2,3,4,5,6,7,8];
let ganjil = [];
for(let i=0; i < bilangan.length; i++) {
   if(bilangan[i] % 2 == 1) {
      ganjil.push(bilangan[i]);
   }
}

console.log(ganjil)
// [ 1, 3, 5, 7 ]
```

Hampir sama dengan method `.map()`, setiap perulangan memberikan nilai balik yang dapat diteruskan atau dikelola lagi.

```js
const bilangan = [1,2,3,4,5,6,7,8];
let ganjil = bilangan.filter(num => num % 2);

console.log(ganjil)
// [ 1, 3, 5, 7 ]
```

> Kamu dapat mengubah contoh diatas dengan menggunakan `return` seperti `.map()`

## Reduce

Akhirnya, kita sampai pada `.reduce()`, Metode ini bekerja dengan mendefinisikan titik awal. Ketika metode ini mengulangi setiap nilai, titik awal itu dimodifikasi dan diturunkan.

Contoh untuk menghitung sumbangan amal yang telah dilakukan oleh anak kelas XII RLP 2

```js
const sumbangan = [1000, 2000, 1000, 8000, 7500];
let total = 0;
for(let i=0; i < sumbangan.length; i++) {
   total += sumbangan[i];
}

console.log(total)
// 19500
```

Berbeda dengan `.map()` dan `.filter()`, callback method `.reduce()` memerlukan dua parameter: **akumulator** dan **nilai saat ini**. Akumulator akan menjadi parameter pertama dan merupakan nilai “pass it down”.

```js
const sumbangan = [1000, 2000, 1000, 8000, 7500];
let total = sumbangan.reduce((total, sumbang) => {
   return total + sumbang;
});

console.log(total)
// 19500
```

Bisa juga menggunakan parameter kedua sebagai nilai yang ditambahkan saat perulangan selesai. Misalkan sumbangan yang telah terkumpul selain XII RPL 2 adalah sebanyak 450000, maka kita akan menghitung jumlah sumbngan semua siswa di SMK Negeri 2 Guguak.

```js
const sumbangan = [1000, 2000, 1000, 8000, 7500];
let total = sumbangan.reduce((total,sumbang) => {
   return total + sumbang;
}, 450000);

console.log(total)
// 469500
```

Itulah secara sederhana penggunaan method `.map()`, `.filter()`, dan `.reduce()` pada javascript.