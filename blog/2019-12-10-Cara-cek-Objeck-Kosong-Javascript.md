---
id: cara-cek-objek-kosong-javascript
title: Cara cek Objek Kosong Javascript
author: Asrul Harahap
author_title: React Developer
author_url: https://github.com/talkasrul
author_image_url: https://avatars2.githubusercontent.com/u/15111402?s=460&v=4
tags: [javascript, teori]
---

### Gunakan `Object.keys` atau `Object.values`

Gunakan `Object.keys` untuk mendapatkan `array` yang berisi seluruh key yang ada pada objek tersebut, kemudian hitung panjang `array` lalu bandingkan dengan Nol (0), jika sama maka objek adalah kosong, perhatikan contoh berikut.

<!--truncate-->

```js
let obj = {}
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

console.log(isEmpty(obj))
// true
```

Cara `Object.values` hampir sama dengan `Object.keys` tetepi yang dicek adalah value dalam array.

```js
let obj = {}
function isEmpty(obj) {
    return Object.values(obj).length === 0;
}

console.log(isEmpty(obj))
// true
```

### Looping objek dengan `for ... in`

Gunakan looping `for ... in` untuk mengulang `prop` pada objek.

```js
let obj = {}
function isEmpty(obj) {
  for(let prop in obj) {
    if(obj.hasOwnProperty(prop)) return false;
  }
  return true;
}

console.log(isEmpty(obj))
// true
```

Dalam kode di atas, kita akan mengulang-ulang properti objek dan jika suatu objek memiliki setidaknya satu properti, maka itu akan memasuki loop dan kembali `false`. Jika objek tidak memiliki properti apa pun maka itu akan mengembalikan `true`.

### Menggunakan `JSON.stringify`

Objek kosong bentuknya adalah seperti berikut `{}`. 
Jika kita lakukan `JSON.stringify` terhadap objek kosong maka kita kan temukan nilainya sebuah braket pembukaan dan penutupan, berdasarkan itu kita bisa bandingkan dengan braket pembuka dan penutup dalam bentuk string. Lebih jelas lihat contoh berikut.

```js
let obj = {}
function isEmptyObject(obj){
    return JSON.stringify(obj) === '{}';
}

console.log(isEmptyObject(obj))
// true
```

### Menggunakan JQuery

```js
jQuery.isEmptyObject(obj);
```

### Menggunakan Lodash

```js
_.isEmpty(obj);
```

Berdasarkan cara-cara diatas kalau asrul dev sendiri lebih suka pakai `JSON.stringify`, kalau sahabat lebih suka mana? silahkan tinggalkan komentar yah...