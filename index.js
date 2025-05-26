const express = require("express");
const mysql = require('mysql2');
const app = express();

app.use(express.json())

//ENDPOINTS

//Crear Base de Datos
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE expressDB';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database created...')
    })
})

//Crear Tabla
app.get('/createpoststable',(req,res)=>{
let sql = 'CREATE TABLE posts(id INT AUTO_INCREMENT,title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))'
  db.query(sql,(err,result)=> {
    if(err) throw err;
    console.log(result);
    res.send('Posts table created...')
  })
})

//Añadir un post a la tabla posts - NO reutilizable

/* app.post("/", (req, res) => {
//console.log(req.body)
//body puede llamarse contenido --> porque es el contenido del post
  let sql = `INSERT INTO posts (title, body) values 
    ('Post one', 'This is post number one');`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Post added...");
  });
}); */

//Añadir un post a la tabla posts - REUTILIZABLE
app.post("/", (req, res) => {
console.log(req.body)
  let sql = `INSERT INTO posts (title, body) values
    ('${req.body.title}', '${req.body.body}');`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    //console.log(result);  //Esto se borra una vez funcione
    res.send("Post added...");
  });
});

//Traer todos los posts (publicaciones)
app.get('/',(req,res)=> {
  let sql = 'SELECT * FROM posts';
  db.query(sql,(err,result)=> {
    if(err) throw err;
    res.send(result) 
  })
})

//Traer publicación por id
app.get('/id/:id',(req,res)=>{
  let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
  db.query(sql,(err,result)=> {
    if(err) throw err;
    res.send(result)
  })
})

//Actualizar una publicación por id
app.put('/id/:id',(req,res)=>{
  //let newTitle = 'Updated Title'; //req.body.title
  let sql = `UPDATE posts SET title = '${req.body.title}' WHERE id = ${req.params.id}`;
  db.query(sql, (err,result)=> {
    if(err) throw err;
    console.log(result)
    res.send('Post updated...')
  })
})

//Eliminar publicación por id
app.delete('/id/:id',(req,res)=>{
  let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
  db.query(sql, (err,result)=> {
    if(err) throw err;
    res.send('Post deleted')
  })
})






//conexión a BD
const db = mysql.createConnection({
//aqui la config de la BD
});

db.connect();


//SERVIDOR
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

