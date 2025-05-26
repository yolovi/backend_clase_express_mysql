const db = require("../config/database.js");

const PostController = {
  create(req, res) {
    // console.log(req.body); //una vez comprobamos que vienen los datos --> se borra

    let sql = `INSERT INTO posts (title, body) VALUES
    ('${req.body.title}', '${req.body.body}');`;
    db.query(sql, (err, result) => {
      if (err) throw err; //si hay error tira una excepción
      //console.log(result);  //Esto se borra una vez funcione
      res.send("Post added...");
    });
  },

  getAll(req, res) {
    let sql = "SELECT * FROM posts";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  },

 
  getById(req, res) {
  let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
},

};

module.exports = PostController;

//AÑADIR AL POSTCONTROLLER:



/*
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
*/
