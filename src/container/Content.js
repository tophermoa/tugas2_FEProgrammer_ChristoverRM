import React from 'react';
import Dashboard from '../pages/Dashboard.js';
import Add from '../component/Add.js';
import Input from '../pages/AllData.js';

class Content extends React.Component{
    constructor(props){
        super(props)
        this.konten=this.konten.bind(this);
    }

    konten=()=>{
        switch (this.props.pindahan) {
            case 1:
                return(
                    <Dashboard />
                );
                
            case 2:
                return(
                    <Input diinputjuga={this.props.diinput} />
                );
                
            case 3:
                return(
                    <Add />
                );
            
        }
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                            

                            {this.konten()}

                            {/* <h2>Section title</h2> */}
                            
                            </main>
                </div>
            </div>
        )
    }
}

export default Content;