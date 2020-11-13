import React from 'react';
import Content from './Content.js';
// Navi from './Navi.js';
import { Link } from 'react-router-dom';
import dash from '../asset/dashboard.png';
import data from '../asset/data.png';
import add from '../asset/add.png';

class Wrapper extends React.Component{
    constructor(props){
        super(props)
        this.state={
            step: 1,
            input: ""
        }
        this.pindah=this.pindah.bind(this);
    }

    pindah(){
        switch (this.state.step) {
            case 1:
                return(
                    <Content pindahan={1} />
                );
            case 2:
                return(
                    <Content diinput={this.state.input} pindahan={2} />
                );
            case 3:
                return(
                    <Content pindahan={3} />
                );
            default:
                break;
        }
    }

    edit(e){
        this.setState({
            step: e
        })
    }

    render(){
        return(
            <div>
                <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3">Monitor Penduduk</a>
                    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                </nav>
                <div className="container-fluid">
                    <div className="row">
                        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                            <div className="sidebar-sticky pt-3">
                                <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active">
                                    <img src={dash} style={{padding: "5px"}}/>
                                    <Link onClick={()=>this.edit(1)}><span></span>Dashboard</Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                    <img src={data} style={{padding: "5px"}}/>
                                    <Link onClick={()=>this.edit(2)}>Data Penduduk</Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                    <img src={add} style={{padding: "5px"}}/>
                                    <Link onClick={()=>this.edit(3)}>Tambah Data</Link>
                                    </a>
                                </li>
                                </ul>
                            </div>
                        </nav>
                    

                        {this.pindah()}

                    </div>
                </div>
            </div>
        )
    }
}

export default Wrapper;