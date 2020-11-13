const express = require('express')
const wargas = express.Router()
const cors = require('cors')

const Warga = require('../model/Warga')
wargas.use(cors())


//input warga
wargas.post("/warga", (req, res, next) => {
	Warga.create({
		nama: req.body.nama,
		agama: req.body.agama,
		warganegara: req.body.warganegara,
		status: req.body.status,
		ekonomi: req.body.ekonomi,
		gol: req.body.gol,
		alamat: req.body.alamat,
		job: req.body.job
	}, (err, result) => {
		if(err){
			next(err);
		} else {
			res.json({status: "success", message: "warga berhasil diinput", data: result})
		}
	})
	//res.send("ok")
})

//tampil semua warga
wargas.get("/warga", (req, res, next) => {
	Warga.find({}, function(err, wargas){
		var data = []
		if(err){
			next(err);
		} else {
			for (let war of wargas){
				data.push([war.nama, war.agama,war.warganegara,war.status,war.ekonomi,war.gol,war.alamat,war.job]);
			}
		}
		//res.send(data);
	})
	.then(data=>{
		res.send(data)
	})
})

//update warga
wargas.put("/update", (req, res) => {
	Warga.findByIdAndUpdate(req.body.Id, {
        nama: req.body.nama,
		agama: req.body.agama,
		warganegara: req.body.warganegara,
		status: req.body.status,
		ekonomi: req.body.ekonomi,
		gol: req.body.gol,
		alamat: req.body.alamat,
		job: req.body.job
    })
	.exec((err,result)=>{
		if(err){
			return res.status(422).json({error:err})
		} else {
			res.json(result)
			console.log(result)
		}
	})	
})

//delete warga
wargas.post("/delete",(req,res)=>{
    Warga.findByIdAndDelete(req.body.Id)
    .exec((err,result)=>{
		if(err){
			return res.status(422).json({error:err})
		} else {
			res.json(result)
			console.log(result)
		}
	})	
})

module.exports = wargas