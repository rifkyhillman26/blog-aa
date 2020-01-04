---
id: crud-express-dan-mysql
title: CRUD Express dan Mysql
author: Asrul Harahap
author_title: React Developer
author_url: https://github.com/talkasrul
author_image_url: https://avatars2.githubusercontent.com/u/15111402?s=460&v=4
tags: [express, mysql, backend]
---

Sebelum mulai siapkan terlebih dahulu:

1. Nodejs yang telah terinstall
2. Mysql server, boleh pakai xampp atau mamp
3. VS Code, sublime, atom atau lainnya sebagai editor
4. Browser
5. Semangat

> [Source code](https://github.com/asruldev/crud-express)

<!--truncate-->

Pertama sekali anda harus membuat projek baru pada sebuah folder, misal saya membuat folder `crud-express` dan masuk kedalam folder tersebut.

```bash
mkdir crud-express
cd crud-express
```

Initlah nodejs project pada folder tersebut sehingga menghasilkan `package.json` dengan kode `npm init`, isi nama project dan beberapa pertanyaan seperti versi, main file, author, descripsi, dll sehingga hasilnya seperti berikut.

```json
{
  "name": "crud-express",
  "version": "1.0.0",
  "description": "crud express js dan mysql",
  "main": "index.js",
  "scripts": {
    "start": "nodemon",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Asrul Harahap",
  "license": "ISC"
}
```

Install package express, mysql, dan hbs dengan cara :

```bash
npm install express
npm install mysql
npm install hbs
```

atau dengan cara

```bash
npm i express mysql hbs
```

Sehingga hasilnya menjadi:

```json
{
  "name": "crud-express",
  "version": "1.0.0",
  "description": "crud express js dan mysql",
  "main": "index.js",
  "scripts": {
    "start": "nodemon",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Asrul Harahap",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "hbs": "^4.0.6",
    "mysql": "^2.17.1"
  }
}
```

Buatlah file `index.js` untuk menjalankan server nodejs. Tulis kode berikut

```js
const express = require("express");
const app = express();

//server listening
app.listen(5000, () => {
  console.log("Server is running at port 5000");
});
```

Kemudian buatlah database pada mysql, boleh menggunakan phpmysql biar lebih cepat.

![Database](https://github.com/asruldev/crud-express/raw/master/db.png)

Edit kembali `index.js` dan tambahkan kode untuk koneksi express dengan mysql seperti berikut ini.

```js
const mysql = require("mysql");

//konfigurasi koneksi
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "8889",
  password: "root",
  database: "express_db"
});

//connect ke database
conn.connect(err => {
  if (err) throw err;
  console.log("Mysql Connected bro...");
});

```

Jika kita jalankan dengan cara `node index.js` maka tampilannya seperti berikut:

```bash
Server is running at port 5000
Mysql Connected...
```

Kita tau bahwa server sudah jalan pada http://localhost:5000 dan juga sudah terkoneksi dengan database.

Selanjutnya kita set untuk view sehingga dapat ditampilkan dengan html pada browser. Tambah beberapa kode berikut pada file  `index.js`

```js
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
```

Tambahkan kode berikut pada `index.js` sebagai kontrol

### CREATE

```js
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/save", (req, res) => {
  let data = {
    product_name: req.body.product_name,
    product_price: req.body.product_price
  };
  let sql = "INSERT INTO product SET ?";
  conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect("/");
  });
});
```

### READ

```js
app.get("/", (req, res) => {
  let sql = "SELECT * FROM product";
  conn.query(sql, (err, results) => {
    if (err) throw err;
    res.render("list", {
      results: results
    });
  });
});
```

### UPDATE

```js
app.post("/update", (req, res) => {
  let sql =
    "UPDATE product SET product_name='" +
    req.body.product_name +
    "', product_price='" +
    req.body.product_price +
    "' WHERE id=" +
    req.body.id;
  conn.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect("/");
  });
});
```

### DELETE

```js
app.post("/delete", (req, res) => {
  let sql = "DELETE FROM product WHERE id=" + req.body.product_id + "";
  conn.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect("/");
  });
});
```

Kemudian buat file untuk ditampilkan ke client pada folder views dengan nama file `list.hbs`

```hbs
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>CRUD Express JS</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <h2 class="text-center">Product List</h2>
        <button class="btn btn-success" data-toggle="modal" data-target="#myModalAdd">Add New</button>
        <table class="table table-striped" id="mytable">
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {{#each results}}
                    <tr>
                        <td>{{ id }}</td>
                        <td>{{ product_name }}</td>
                        <td>{{ product_price }}</td>
                        <td>
                        <a href="javascript:void(0);" class="btn btn-sm btn-info edit" data-id="{{ id }}" data-product_name="{{ product_name }}" data-product_price="{{ product_price }}">Edit</a>
                        <a href="javascript:void(0);" class="btn btn-sm btn-danger delete" data-id="{{ id }}">Delete</a>
                        </td>
                    </tr>
                {{/each}}
            </tbody>
        </table>
    </div>

    <!-- Modal Add Produk-->
    <form action="/save" method="post">
        <div class="modal fade" id="myModalAdd" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add New Product</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <input type="text" name="product_name" class="form-control" placeholder="Product Name" required>
                        </div>

                        <div class="form-group">
                            <input type="text" name="product_price" class="form-control" placeholder="Price" required>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </form>

    <!-- Modal Update Produk-->
    <form action="/update" method="post">
        <div class="modal fade" id="EditModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit Product</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <input type="text" name="product_name" class="form-control product_name" placeholder="Product Name" required>
                        </div>

                        <div class="form-group">
                            <input type="text" name="product_price" class="form-control price" placeholder="Price" required>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <input type="hidden" name="id" class="product_id">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </form>

    <!-- Modal Delete Produk-->
    <form id="add-row-form" action="/delete" method="post">
        <div class="modal fade" id="DeleteModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="myModalLabel">Delete Product</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <strong>Anda yakin mau menghapus data ini?</strong>
                    </div>
                    <div class="modal-footer">
                        <input type="hidden" name="product_id" class="form-control product_id2" required>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-success">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </form>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script>
    $(document).ready(function(){
    //tampilkan data ke modal untuk edit
        $('#mytable').on('click','.edit',function(){
            var product_id = $(this).data('id');
            var product_name = $(this).data('product_name');
            var product_price = $(this).data('product_price');
            $('#EditModal').modal('show');
            $('.product_name').val(product_name);
            $('.price').val(product_price);
            $('.product_id').val(product_id);
        });
        //tampilkan modal hapus record
        $('#mytable').on('click','.delete',function(){
            var product_id = $(this).data('id');
            $('#DeleteModal').modal('show');
            $('.product_id2').val(product_id);
        });

    });
    </script>
</body>
</html>
```


<hr />

Selengkapnya lihat [Source code Disini](https://github.com/asruldev/crud-express)