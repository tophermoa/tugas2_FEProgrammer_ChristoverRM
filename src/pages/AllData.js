import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import swal from 'sweetalert';
import ModalComp from '../component/ModalComp';
import {readWarga, update, deleted} from '../function/WargaFunction';


import ReactExport from "react-data-export";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
   

  function showTotal() {
    return <p>There are 60 items total</p>
  }

//   const isSearched = searchTerm => item => item.nama.toLowerCase().includes(searchTerm.toLowerCase());
  
class Input extends React.Component{
    constructor(props){
        super(props)
        this.state={
            datas: [],
            modal: false,
            getId: '',
            nama: '',
            warganegara: '',
            agama: '',
            status: '',
            ekonomi: '',
            gol: '',
            alamat: '',
            job: ''
        }
        this.formatter=this.formatter.bind(this);
    }

    readAllWarga=()=>{
        readWarga().then(data=>{
          this.setState({
            datas: [...data]
          },
          ()=>{
            console.log(this.state.datas)
          })
        })
      }
      

    cariData=(e)=>{
        e.preventDefault();

		const sidateTime = this.state.tglAkhir.unix();
		console.log(this.state.tglAkhir)
		console.log(sidateTime);
    }

    componentDidMount() {
        this.readAllWarga();
    }

    modalClose =()=>{
        this.setState({
            modal: false
        })
    }
    
    modalShow = (idnya, namanya, warganegaranya, agamanya,statusnya,ekonominya,golnya,alamatnya,jobnya) => {
        this.setState({
            modal: true
        })
        this.setState({
            getId: idnya,
            nama: namanya,
            warganegara: warganegaranya,
            agama: agamanya,
            status: statusnya,
            ekonomi: ekonominya,
            gol:golnya,
            alamat:alamatnya,
            job:jobnya
        })
    }
    
    refresh=()=>{
        window.location.reload();
    }

    handleFormSubmit(e){
        e.preventDefault()
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
        const Id = this.state.getId;
        console.log("INI ID DI ALLDATA "+Id)
        update(biodata, Id).then(res => {
        	swal({
				title: "Data berhasil diubah!",
				icon: "success"
			}).then(()=>{
                this.setState({
                    modal: false
                })
            })
			console.log('Update berhasil')
		})

    }

    onDelete(id){
        console.log("ID PADA ONDELETE "+id);
        deleted(id).then(res=>{
            swal({
				title: "Data berhasil dihapus!",
				icon: "success"
			}).then((res)=>{
                window.location.reload()
            })
        })
    }

    formatter(cell, row){
        return(<div>
            <button className="btn btn-danger btn-sm" onClick={() => {this.sidelete(row)}} type="submit">
                <i class="fas fa-trash-alt"></i>
            </button>
            &nbsp;&nbsp;
            <button  className="btn btn-primary btn-sm" onClick={() => this.siedit(row)} >
                <i class="fas fa-edit"></i>
            </button>
        </div>);
    }

    sidelete(row){
        this.onDelete(row._id)
    }

    siedit(row){
        this.modalShow(
            row._id,
            row.nama,
            row.warganegara,
            row.agama,
            row.status,
            row.ekonomi,
            row.gol,
            row.alamat,
            row.job
        )
        console.log(row)
    }

    render(){
        const options = {
            page: 4,
            prePage:  '⟵',
            nextPage: '⟶',
            firstPage: '⟸',
            lastPage: '⟹',
            paginationShowsTotal: showTotal
            // onRowClick: this.siedit
          }
        return(
            <div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Data Penduduk International</h1>
                  <div class="btn-toolbar mb-2 mb-md-0">
                      <div class="btn-group mr-2">
                        <ExcelFile element={<button type="button" class="btn btn-sm btn-outline-secondary">Export to Excel</button>}>
                            <ExcelSheet data={this.state.datas} name="Penduduk_International">
                              <ExcelColumn label="Nama" value="nama"/>
                              <ExcelColumn label="Agama" value="agama"/>
                              <ExcelColumn label="Kewarganegaraan" value="warganegara"/>
                              <ExcelColumn label="Status" value="status"/>
                              <ExcelColumn label="Ekonomi" value="ekonomi"/>
                              <ExcelColumn label="Golongan Darah" value="gol"/>
                              <ExcelColumn label="Alamat" value="alamat"/>
                              <ExcelColumn label="Pekerjaan" value="job"/>
                            </ExcelSheet>
                          </ExcelFile>
                      </div>
                    </div>
                </div>
                    <BootstrapTable data={this.state.datas}
                                    pagination={true}
                                    options={options}
                                    // onTableChange={isSearched(this.props.diinputjuga)}
                    >
                    <TableHeaderColumn isKey dataField='nama'>
                        Nama
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='agama'>
                        Agama
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='warganegara'>
                        Kewarganegaraan
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='status'>
                        Status
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='ekonomi'>
                        Ekonomi
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='gol'>
                        Gol. Darah
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='job'>
                        Pekerjaan
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="edit_delete" dataFormat={this.formatter}>
                        Action
                    </TableHeaderColumn>
                    </BootstrapTable>

                {/* <table className="table table-striped" width='100%' >
                    <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Kewarganegaraan</th>
                        <th>Agama</th>
                        <th>Status</th>
                        <th>Ekonomi</th>
                        <th>Gol. Darah</th>
                        <th>Alamat</th>
                        <th>Pekerjaan</th>
                        <th>Action</th>    
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.datas == null ? '' : this.state.datas
                    .filter(isSearched(this.props.diinputjuga))
                    .map((data) => (
                    <tr>
                        <td>{ data.nama }</td>
                        <td>{ data.warganegara }</td>
                        <td>{ data.agama }</td>
                        <td>{ data.status }</td>
                        <td>{ data.ekonomi }</td>
                        <td>{ data.gol }</td>
                        <td>{ data.alamat }</td>
                        <td>{ data.job }</td>
                        <td><button className="btn btn-danger btn-sm" type="submit" onClick={()=>this.onDelete(data._id)}>Delete</button>
                            &nbsp;&nbsp;
                            <button className="btn btn-primary btn-sm" onClick={()=> this.modalShow(
                                data._id,
                                data.nama,
                                data.warganegara,
                                data.agama,
                                data.status,
                                data.ekonomi,
                                data.gol,
                                data.alamat,
                                data.job
                            )}>
                                Edit
                            </button>
                        </td>
                    </tr>
                    ))}
                    </tbody>
                </table> */}

                <ModalComp
                    modal={this.state.modal}
                    nama={this.state.nama}
                    warganegara={this.state.warganegara}
                    agama={this.state.agama}
                    status={this.state.status}
                    ekonomi={this.state.ekonomi}
                    gol={this.state.gol}
                    alamat={this.state.alamat}
                    job={this.state.job}
                    modalClose={this.modalClose}
                    changeNama={e => this.setState({ nama: e.target.value })}
                    changeWarganegara={e => this.setState({ warganegara: e.target.value })}
                    changeAgama={e => this.setState({ agama: e.target.value })}
                    changeStatus={e => this.setState({ status: e.target.value })}
                    changeEkonomi={e => this.setState({ ekonomi: e.target.value })}
                    changeGol={e => this.setState({ gol: e.target.value })}
                    changeAlamat={e => this.setState({ alamat: e.target.value })}
                    changeJob={e => this.setState({ job: e.target.value })}
                    handleFormSubmit={e => this.handleFormSubmit(e)}
                />
            </div>
        )
    }
}

export default Input;