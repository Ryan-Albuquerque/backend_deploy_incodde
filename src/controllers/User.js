// const db = require("../database/db");

// module.exports = {
//   index(req, res) {
//     return res.status(200).json(db);
//   },
//   create(req, res) {
//     let i = 0;
//     if (db.length == 0) {
//       db.push(req.body);
//       return res.status(201).send("enviado");
//     }
//     db.forEach((element) => {
//       if (element.username === req.body.username) {
//         i = 1;
//         return res.status(409).send("impossivel criar");
//       }
//     });

//     if (i != 1) {
//       db.push(req.body);
//       return res.status(201).send("criado");
//     }
//   },
//   filter(req, res) {
//     let i = 0;
//     db.forEach((element) => {
//       if (element.username === req.params.username) {
//         i = 1;
//         return res.status(200).json(element);
//       }
//     });

//     if (i != 1) {
//       return res.status(404).send("nao encontrado");
//     }
//   },
//   delete(req, res) {
//     let i = 0;
//     db.forEach((element) => {
//       if (element.username === req.params.username) {
//         pos = db.indexOf(element);

//         db.splice(pos, 1);

//         i = 1;
//         return res.status(200).send("elemento eliminado");
//       }
//     });

//     if (i != 1) {
//       return res.status(404).send("user nao encontraod");
//     }
//   },
// };

const mongoose = require('mongoose')

const model = require('../model/CRUDSchema')

module.exports = {

  async index(req, res){
    const data = await model.find({})

    return res.json(data)
  },


  async create(req, res){

    const newUser = req.body

    const db = await model.findOne({username: newUser.username})

    if (!db) {
       const userCreated = await model.create(newUser)

       return res.json(userCreated)
    }else{
      return res.status(400).json({ msg : "deu erro"})
    }

  },

  async filterId(req,res){

    const user = req.params.username

    const filtered =  await model.findOne({username:user})

    return res.json(filtered)


  },

  async dlt(req,res){

    const userDelete = await model.findOneAndDelete({username: req.params.user}, req.body)

    return res.json({msg:"userDelete"})

  },

  async update(req,res){

    const user = await model.updateOne({ username: req.params.user}, req.body)

    return res.json(user)

  }


}

