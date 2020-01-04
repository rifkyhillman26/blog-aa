---
id: javascript-array-ke-json
title: Javascript Array ke JSON
author: Asrul Harahap
author_title: React Developer
author_url: https://github.com/talkasrul
author_image_url: https://avatars2.githubusercontent.com/u/15111402?s=460&v=4
tags: [javascript, teori]
---

JSON adalah format pertukaran data yang sangat ringan untuk pertukaran data antara sisi server dan sisi klien yang cepat dan mudah diurai dan diimplementasikan.

<!--truncate-->

### Ubah Array ke JSon

Anda dapat menggunakan `JSON.stringify` untuk mengubah array menjadi `string` yang diformat JSON dalam JavaScript.

Misalkan ada array seperti "[1, 2, 3, 4]". Jika Anda ingin mengonversi array ini ke Objek JSON dalam javascript. Mari kita lihat contoh di bawah ini

```js
var array = [1, 2, 3, 4]; 
var arrayToString = JSON.stringify(Object.assign({}, array));  // array ubah ke string
var stringToJsonObject = JSON.parse(arrayToString);  // string ubah ke json
 
console.log(stringToJsonObject);
// { '0': 1, '1': 2, '2': 3, '3': 4 }
```

Keterangan

1. `JSON.stringify()` and `Object.assign()` digunakan untuk mengubah array dalam bentuk objek ke string.
2. `JSON.parse()` digunakan untuk mengubah objek dalam bentuk string menjadi objek JSON.

### Mengubah JSON ke Array

Saat mengonversi objek atau JSON ke array, gunakan metode `.entries()` dari kelas `Object`. Ini akan mengubah objek kita menjadi array array. Setiap array bersarang adalah daftar dua nilai di mana item pertama adalah kunci dan item kedua adalah nilai.

```js
var object = {
   "first_name": "Asrul",
   "last_name": "Harahap",
   "email": "talkasrul@gmail.com"
}
var arr = Object.entries(object);
 
console.log(arr);
// [ [ 'first_name', 'Asrul' ],
//  [ 'last_name', 'Harahap' ],
//  [ 'email', 'talkasrul@gmail.com' ] ]
```

### Mengubah array 2 dimensi ke JSON 

Misalkan arraynya seperti berikut:

```js
var arr = [
    ["Status", "Name", "Usia", "Pekerjaan"], 
    ["active", "Asrul", 25, "JavaScript developer"],
    ["active", "Anis", 25, "Angular developer"],
    ["deactive", "Tisha", 0, "-"],
    ["active", "Lan", 20, "Machine Engineer"],
    ["active", "Kiki", 20, "Web Developer"],
];
```

Jika ingin konversi atau ubah data seperti diatas maka caranya seperti berikut ini:

```js
var arr = [
    ["Status", "Name", "Usia", "Pekerjaan"], 
    ["active", "Asrul", 25, "JavaScript developer"],
    ["active", "Anis", 25, "Angular developer"],
    ["deactive", "Tisha", 0, "-"],
    ["active", "Lan", 20, "Machine Engineer"],
    ["active", "Kiki", 20, "Web Developer"],
];
 
function arrayToJSONObject (arr){
    var keys = arr[0];
 
    var newArr = arr.slice(1, arr.length);
 
    var formatted = [],
    data = newArr,
    cols = keys,
    l = cols.length;
    for (var i=0; i<data.length; i++) {
            var d = data[i],
                    o = {};
            for (var j=0; j<l; j++)
                    o[cols[j]] = d[j];
            formatted.push(o);
    }
    return formatted;
}

console.log(arrayToJSONObject(arr))

// [ { Status: 'active',
//     Name: 'Asrul',
//     Usia: 25,
//     Pekerjaan: 'JavaScript developer' },
//   { Status: 'active',
//     Name: 'Anis',
//     Usia: 25,
//     Pekerjaan: 'Angular developer' },
//   { Status: 'deactive', Name: 'Tisha', Usia: 0, Pekerjaan: '-' },
//   { Status: 'active',
//     Name: 'Lan',
//     Usia: 20,
//     Pekerjaan: 'Machine Engineer' },
//   { Status: 'active',
//     Name: 'Kiki',
//     Usia: 20,
//     Pekerjaan: 'Web Developer' } ]
```