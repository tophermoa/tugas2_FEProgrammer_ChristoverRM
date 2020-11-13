import axios from 'axios';

//Post data
export const createWarga = (buat) => {
	return axios.post('http://localhost:8080/wargas/warga', {
		nama: buat.nama,
		agama: buat.agama,
		warganegara: buat.warganegara,
		status: buat.status,
		ekonomi: buat.ekonomi,
		gol: buat.gol,
		alamat: buat.alamat,
		job: buat.job
	})
	.then(res =>{
		console.log("berhasil buat project")
	})
}

//update
export const update = (up, Id) =>{
    console.log(up)
    console.log(Id)
	return axios.put('http://localhost:8080/wargas/update',{
		nama: up.nama,
		agama: up.agama,
		warganegara: up.warganegara,
		status: up.status,
		ekonomi: up.ekonomi,
		gol: up.gol,
		alamat: up.alamat,
		job: up.job,
		Id: Id
	},{
		body: JSON.stringify({
			Id
		})
	})
	.then(result=>{
		console.log(result)
	})
	.catch(err=>{
              console.log(err)
          })
		
	
}

export const deleted=(Id)=>{
    return axios.post("http://localhost:8080/wargas/delete",{
        Id: Id
    }).then(res=>{
        console.log(res)
    })
}

//Tampil semua data
export const readWarga = () => {
	return axios.get('http://localhost:8080/wargas/warga')
	.then(res=>{
		return res.data
	})
}



