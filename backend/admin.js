const database = require("./database");


const getAdmins = (req, res) => {
    database.query("select * from admins")
    .then(([admins]) => {
        res.json(admins);
    })
    .catch((err) => {console.error(err);
    res.status(500).send("Error retrieving admins from database");
});
};

module.exports = {getAdmins}