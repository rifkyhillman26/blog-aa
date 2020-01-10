---
id: Cara-menggunakan-svelte
title: cara menggunakan Svelte
author: Rifki Hilman
author_title: React Developer
author_url: https://github.com/rifkyhillman26
author_image_url: https://avatars0.githubusercontent.com/u/51555828?s=460&v=4
tags: [react, react-router, frontend]
---

Svelte adalah pendekatan baru yang radikal untuk membangun antarmuka pengguna..

Panduan ini akan menunjukkan cara untuk bangkit dan berjalan denan aplikasi Svelte. Setiap panduan lain pada buku ini akan membahas topik untuk mengoptimalkan kecepatan atau aksesibilitas aplikasi Svelte.

<!-- Sebelum memulai lebih lanjut, mari kita install dependensi yang diperlukan.

```bash
yarn add react-router-dom
``` -->

<!--truncate-->

 Svelte JS adalah pendekatan baru dalam membangun user interface. Sederhananya Svelte JS bekerja mirip dengan Framework UI seperti React & Vue yang mengupdate DOM setiap kali ada perubahan pada data/state, hanya saja program Svelte lebih fleksibel dalam penulisan kodenya dan program Svelte JS di compile menjadi vanilla js sehingga lebih cepat.
 
### Menginstall Svelte

Pada `shell` atau terminal, Anda hanya perlu menjalankan perintah berikut untuk menginstall svelte:

```bash
npx degit sveltejs/template my-svelte-project
```


Setelah perintah diatas selesai dieksekusi, Anda dapat menjalankan aplikasi dengan perintah berikut:

```bash
cd my-svelte-project
```

cara menjalankan aplikasi dengan perintah berikut:

```bash
npm run dev
```
<!-- 
![S shoot](https://raw.githubusercontent.com/rifkyhillman26/Kumpulan-Gambar/master/conda.jpg) -->

 
### Dasar Dasar Svelte JS

Penulisan kode pada Svelte JS sangat sederhana seperti kode berikut


```javascript

<script>
    let name = "world";
<script>

<h1>Hello {name} !</h1>

```

kode diatas akan menghasilkan halaman web dengan tampilan Hello World . Svelte js mengcompile value dari variabel `name` sehingga dapat ditampilkan dengan mudah di elemen HTML. Svelte JS juga menyingkat penulisan kode dengan baik dibandingkan cara tradisional seperti kode berikut


```javascript

Hello <span id=”text”></span>

<script>
let word = “World”
document.getElementById(‘text’).innerHTML = word
</script>

```

Penulisan kode di Svelte JS sedikit berbeda dengan cara tradisional seperti penulisan event & penulisan logika di html. berikut adalah contoh penulisan kode event


```javascript

// PENULISAN EVENT

<script>
function log(text='logged'){
 console.log(text)
}
</script>

// Penulisan Event menggunakan titik dua : , dengan format on:event
<button on:click="{log}"></button>

/* Pemanggilan Fungsi dengan parameter ditulis sedikit berbeda dengan membuka fungsi baru
*/  
<button on:click="{()=>{ log('Log With Param') }}"></button>
```

berikut adalah contoh penulisan logika di html


```javascript

<script>
let listOfNum = [1,2,3,4,5]
</script>

// Melakukan perulangan di html
{#each listOfNum as num}
 <span> {num} </span>
{/each}

```

sedikit catatan, Svelte JS melakukan update dom dengan mengecek apakah terdapat assignment, jadi kode seperti push dll tidak akan mengubah tampilan page. kode tersebut bisa diakali seperti kode dibawah


```javascript

<script>
let listOfNum = [1,2,3,4,5]

listOfNum.push(6) // Tidak reaktiv, sehingga dom tidak diupdate

// Solusi,mengganti dengan assignment
listOfNum = [...listOfNum, 6]
</script>

```

semoga ilmu ini bermanfaat untuk yang membacanya :)