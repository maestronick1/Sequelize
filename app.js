const db = require("./models");
db.user.create({
    firstName : "Gabe",
    lastName: "Sand",
    age: 21,
    email: "gabesand@gmail.com"
}).then(data => {
    console.log(data);
})
//search by id
db.user.findOne({
    where: {id: 2 }
}).then(user=>{
    console.log("==== user 1====")
    console.log(user.dataValues)
})
//search by name
db.user.findOne({
    where: {firstName: "Lizz"}
}).then(user => {
    console.log("==== user 2====")
    console.log(user.dataValues)
})
//search by email
db.user.findOne({
    where: {email: "lizwesterband@gmail.com"}
}).then(user=>{
    console.log("==== user 3====")
    console.log(user.dataValues)
})

db.user.findOrCreate({
    where: {
        firstName: "Jane",
        lastName: "Doe"
    },
    defaults: {age:39, email: "janedoe@doejane.com"}
}).then(([user, created])=>{
    console.log(`This was created on ${created}`);
    console.log(user.dataValues)
    
    
})

let queryOne ={
    where: {
        firstName: "Alabama",
        lastName: "Dorado"
},
defaults: {age:39, email: "ad@da.com"}
};

db.user.findOrCreate(queryOne).then(([user, created])=>{
    console.log(created);
    console.log(user.dataValues)
})

db.user.findAll().then(users => {
    users.forEach(user => {
        console.log(user.dataValues.firstName)
    })
});