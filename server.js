const express = require('express');
const app = express();
const fs = require("fs");
         
/*
*
* method >listUsers
* method 'GET' : creation d'une liste users
*/

app.get('/listUsers', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf-8', function(err, data){
        console.log(data);
        res.send(data);
    });
})

/*
*
* method > addUsers
* method 'POST' : creation d'une resource user
*/

app.post('/addUser', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf-8', function(err, data){
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.send(JSON.stringify(data));
    });
})

let user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id" : 4
    }
}

/*
*
* method > getUserById
* method 'GET' : recuperer la resource d'un utilisateur par son identifiant
*/

app.get('/:id', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf-8', function(err, data){
        if(err) throw err;
        //Variable 'users' will contain the result of users information to retrieve all ressources
        let users = JSON.parse(data);
        //Variable 'user' will retrieve user information by id
        let user = users["user" + req.params.id]
        //Display user information by id
        console.log("User Info by id: " + JSON.stringify(user));
        res.send(JSON.stringify(user));
    });
})

/*
*
* method > DeleteUser
* method 'DELETE' : Supprimer une ressource utilisateur
*/

app.delete('/deleteUser', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf-8', function(err, data){
        //Variable 'data' will contain the result of users informations to retrieve all ressources
        data = JSON.parse(data);
        //Delete a user (id:2)
        delete data["user" + 2];
        //Display in log data of the delete user 
        console.log("Delete user: " + data);
        //Send the information of the result with the user deleted
        res.send(JSON.stringify(data));
    });
})


/*
*
* Creation serveur
*
*/

let server = app.listen(8081, function(){
    let host = server.address().address
    let port = server.address().port
    console.log("Launch API restful with the following URI http://%s:%s", host, port)
})


