import React from 'react';
import GPie from '../grafik/GPie.js';
import GBar from '../grafik/GBar.js';
import GLine from '../grafik/GLine.js';
import GGeo from '../grafik/GGeo.js';
import {readWarga} from '../function/WargaFunction';


class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            datas:[]
        }
    }

    componentDidMount() {
      this.readAllWarga()
  }

  readAllWarga=()=>{
      readWarga().then(data=>{
        this.setState({
          datas: [...data]
        },
        ()=>{
          console.log("bisa")
        })
      })
    }
    render(){
        return(
            <div>
              <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Dashboard</h1>
                  <div class="btn-toolbar mb-2 mb-md-0">
                      <div class="btn-group mr-2">
                      </div>
                    </div>
                </div>
              <div className="row">

                <div>

                <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Jumlah penduduk / kewarganegaraan</h6>
                </div>
                <div className="card-body">
                  <div className="chart-bar" style={{height: 250, width:750}}>
                    <GGeo />
                  </div>
                  <hr />
                </div>
              </div>

              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Penduduk berdasarkan Golongan Darah dan Ekonomi</h6>
                </div>
                <div className="card-body">
                  <div className="chart-bar" style={{height: 250, width:750}}>
                    <GLine />
                  </div>
                  <hr />
                </div>
              </div>


              <div className="card shadow mb-4" style={{float:"left", margin:"20px"}}>
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Rata-rata Status Penduduk (%)</h6>
                </div>
                <div className="card-body">
                  <div className="chart-bar" style={{height: 250, width: 400}}>
                    <GBar />
                  </div>
                  <hr />
                </div>
              </div>

              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Rata - rata Agama Penduduk (%)</h6>
                </div>
                <div className="card-body">
                  <div className="chart-bar" style={{height: 250, width:350}}>
                    <GPie />
                  </div>
                  <hr />
                </div>
              </div>

                </div>
                </div>



            </div>
        )
    }
}

export default Dashboard;