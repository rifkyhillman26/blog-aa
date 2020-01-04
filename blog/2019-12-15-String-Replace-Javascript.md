---
id: string-replace-javascript
title: String Replace Javascript
author: Asrul Harahap
author_title: React Developer
author_url: https://github.com/talkasrul
author_image_url: https://avatars2.githubusercontent.com/u/15111402?s=460&v=4
tags: [javascript, teori]
---

Dalam tutorial ini, saya akan menjelaskan metode javascript `string.replace()` dengan definisi metode ini, sintaksis, parameter, dan beberapa contoh.

Definisi: - Metode JavaScript `string.replace()` mencari string untuk nilai yang ditentukan atau ekspresi reguler, atau kata kunci, dan mengganti string pencarian kecocokan ke string yang diberikan, dan mengembalikan string baru.
<!--truncate-->

```js
string.replace(search_value, new_value);
```

### Parameters of `string.replace()`

Parameter | Deskripsi
--------|----------
search_value | Ini merupakan parameter wajib yang berisi nilai ekspresi yang akan diganti dengan nilai yang baru
new_value | Parameter kedua ini juga wajib, Sebagai nilai pengganti dari nilai yang dicari

### Contoh

```js
let str = "My fav car color is black";
let res = str.replace(/blue/g, "silver");
console.log( "Output :- " + res ); 
```

Hasilnya: **My fav car color is silver**

```js
let str = "My fav bike color is Black";
let res = str.replace(/black/gi, "white");
console.log( "Output :- " + res ); 
```

Hasilnya: **My fav bike color is white**

```js
let str = 'this is the sentence to end all sentences';
let res = str.replace(new RegExp('sentence', 'g'), 'message');
console.log( "Output :- " + res ); 
```

Hasilnya: **this is the message to end all messages**