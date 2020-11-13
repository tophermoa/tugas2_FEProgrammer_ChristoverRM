import React from 'react';
import swal from 'sweetalert';
import {createWarga} from '../function/WargaFunction';

class Add extends React.Component{
    constructor(props){
        super(props)
        this.state={
            nama: '',
            warganegara: '',
            agama: '',
            status: '',
            ekonomi: '',
            gol: '',
            alamat: '',
            job: ''
        }
    }

    handleTgl = newdate => {
        const sidateTime = newdate.unix();
        const converter = new Date(sidateTime * 1000)
        const tanggal = converter.getDate();
        const bulan = converter.getMonth() + 1;
        const tahun = converter.getFullYear();
        const gabungan = tahun +"-"+ bulan +"-"+ tanggal;
		console.log(this.state.tgl)
        console.log(gabungan);
        this.setState({
            tgl: gabungan
        })
    };

    inputData=(e)=>{
        e.preventDefault();

        const sidateTime = this.state.tgl.unix();
        const converter = new Date(sidateTime * 1000)
        const tanggal = converter.getDate();
        const bulan = converter.getMonth() + 1;
        const tahun = converter.getFullYear();
        const gabungan = tahun +"-"+ bulan +"-"+ tanggal;
		console.log(this.state.tgl)
		console.log(gabungan);
    }

    handleFormSubmit(e){
        e.preventDefault();
        const biodata={
            nama: this.state.nama,
			agama: this.state.agama,
			warganegara: this.state.warganegara,
			status: this.state.status,
			ekonomi: this.state.ekonomi,
			gol: this.state.gol,
			alamat: this.state.alamat,
			job: this.state.job
        }
		

        createWarga(biodata).then(res => {
        	swal({
				title: "Biodata Ditambah",
				icon: "success"
			})
			console.log('Komentar berhasil (halamanbaru)')
		})

	}

    render(){
        return(
            <div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Tambah Data</h1>
                  <div class="btn-toolbar mb-2 mb-md-0">
                      <div class="btn-group mr-2">
                      </div>
                    </div>
                </div>
            <div className="contentAdd">
                <div className="card">
                    <h5 class="card-header">
                        Tambah
                    </h5>
                    <div className="card-body">
                        <form>
                            <table>
                                <tr>
                                    <td>Nama</td>
                                    <td>
                                        <input className="form-control form-control-sm" type="text" onChange={e => this.setState({ nama: e.target.value })} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kewarganegaraan</td>
                                    <td>
                                        <input className="form-control form-control-sm" type="text" onChange={e => this.setState({ warganegara: e.target.value })} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Agama</td>
                                    <td>
                                        <select className="custom-select custom-select-sm" name="agama" id="agama" onChange={e => this.setState({ agama: e.target.value })}>
                                            <option>Pilih...</option>
                                            <option value="Islam">Islam</option>
                                            <option value="Kristen">Kristen</option>
                                            <option value="Budha">Budha</option>
                                            <option value="Hindu">Hindu</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td className="col-md-3">
                                        <input type="radio" name="status" value="Lajang" onChange={e => this.setState({ status: e.target.value })}  />Lajang
                                        <input type="radio" name="status" value="Sudah Menikah" onChange={e => this.setState({ status: e.target.value })}  />Sudah Menikah
                                        <input type="radio" name="status" value="Cerai" onChange={e => this.setState({ status: e.target.value })}  />Cerai
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ekonomi</td>
                                    <td className="col-md-3">
                                        <input type="radio" name="ekonomi" value="Kebawah" onChange={e => this.setState({ ekonomi: e.target.value })}  />Kebawah
                                        <input type="radio" name="ekonomi" value="Menengah" onChange={e => this.setState({ ekonomi: e.target.value })}  />Menengah
                                        <input type="radio" name="ekonomi" value="Keatas" onChange={e => this.setState({ ekonomi: e.target.value })}  />Keatas
                                    </td>
                                </tr>
                                <tr>
                                    <td>Golongan Darah</td>
                                    <td>
                                        <select className="custom-select custom-select-sm" name="gol" id="gol" onChange={e => this.setState({ gol: e.target.value })}>
                                            <option>Pilih...</option>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="O">O</option>
                                            <option value="AB">AB</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Alamat</td>
                                    <td><textarea className="form-control form-control-sm" type="text" onChange={e => this.setState({ alamat: e.target.value })} /></td>
                                </tr>
                                <tr>
                                    <td>Pekerjaan</td>
                                    <td><input className="form-control form-control-sm" type="text" onChange={e => this.setState({ job: e.target.value })} /></td>
                                </tr>
                            </table>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div style={{float:"left"}}>
                            <button type="submit" className="btn btn-success" onClick={e => this.handleFormSubmit(e)}>Save</button>
                            &nbsp;&nbsp;
                            <button type="reset" className="btn btn-warning">Reset</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Add;