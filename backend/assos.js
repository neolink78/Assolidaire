const database = require("./database");

const getAssos = (req, res) => {
    database.query("select * from assos")
    .then(([assos]) => {
        res.json(assos);})
    .catch((err) => {console.error(err);
    res.status(500).send("Error retrieving data from database");
});
};

const getAssosByCategory = (req, res) => {
    const cat_id = parseInt(req.params.cat_id)
    database.query("select * from assos where cat_id= ?", [cat_id])
    .then(([assos]) => {
        if(assos != null) {
            res.json(assos)
        }else {res.status(404).send('Not Found');}
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('error retrievieng data from database');
    });
};

const getFirstAssoWithItsCat = (req, res) => {
    database.query("SELECT a.id, a.name,a.src, c.name AS category_name FROM (SELECT a.*, ROW_NUMBER() OVER(PARTITION BY cat_id ORDER BY id) rn FROM assos a) a JOIN categories c ON a.cat_id = c.id WHERE a.rn = 1")
    .then(([assos]) => {
        res.json(assos);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send("Error retrieving data from db")
    })
}

const postAsso = (req, res) => {
    const {name, src, lien, cat_id} = req.body;

    database.query("insert INTO assos(name, src, lien, cat_id) VALUES (?, ?, ?, ?)",
    [name, src, lien, cat_id]).then(([result]) => {
        res.location(`/assos/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('error saving the user')
    })
}


const deleteAsso = (req, res) => {
    const name = req.params.name;
    database.query('DELETE from assos where name = ?', [name])
    .then(([result]) => {
        if (result.affectedRows === 0) {
            res.status(404).send('Not found');
        }else {res.sendStatus(204);}
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error deleting the movie');
    })
}

module.exports = {
    getAssos,
    getAssosByCategory,
    getFirstAssoWithItsCat,
    postAsso,
    deleteAsso,
}