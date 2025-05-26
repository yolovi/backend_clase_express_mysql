const express = require("express");
const app = express();
const db = require('./config/database.js');

//MIDDLEWARE
app.use(express.json()) //parsear el body de post / put

//ENDPOINTS

//------ RUTAS DE POSTS----------------

app.use('/posts', require('./routes/posts.js'))

//------ RUTAS DE USERS -----------------
//app.use('/users', require('./routes/users.js'));


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



//SERVIDOR
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

