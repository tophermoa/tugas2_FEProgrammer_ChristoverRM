import React from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import {readWarga} from '../function/WargaFunction';
import data from './DataGeo.json';

class GGeo extends React.Component {
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
            console.log(this.state.datas)
          })
        })
      }

    render(){
        const arr = [...this.state.datas];
        //pakistan
        const Pakistan = arr.filter(a=>a.warganegara==='Pakistan');
        const countPakistan = Pakistan.length;
        //turki
        const Turki = arr.filter(a=>a.warganegara==='Turki');
        const countTurki = Turki.length;
        //inggris
        const Inggris = arr.filter(a=>a.warganegara==='Inggris');
        const countInggris = Inggris.length;
        //indonesia
        const Indonesia = arr.filter(a=>a.warganegara==='Indonesia');
        const countIndonesia = Indonesia.length;
        //malaysia
        const Malaysia = arr.filter(a=>a.warganegara==='Malaysia');
        const countMalaysia = Malaysia.length;
        //amerika
        const Amerika = arr.filter(a=>a.warganegara==='Amerika');
        const countAmerika = Amerika.length;
        //rusia
        const Rusia = arr.filter(a=>a.warganegara==='Rusia');
        const countRusia = Rusia.length;
        //canada
        const Canada = arr.filter(a=>a.warganegara==='Canada');
        const countCanada = Canada.length;
        //jepang
        const Jepang = arr.filter(a=>a.warganegara==='Jepang');
        const countJepang = Jepang.length;
        //china
        const China = arr.filter(a=>a.warganegara==='China');
        const countChina = China.length;
        //israel
        const Israel = arr.filter(a=>a.warganegara==='Israel');
        const countIsrael = Israel.length;
        //singapur
        const Singapur = arr.filter(a=>a.warganegara==='Singapur');
        const countSingapur = Singapur.length;
        console.log(countAmerika);
        const datanya = [
            {
              "id": "PAK",
              "value": countPakistan
            },
            {
              "id": "TKM",
              "value": countTurki
            },
            {
              "id": "GBR",
              "value": countInggris
            },
            {
              "id": "IDN",
              "value": countIndonesia
            },
            {
              "id": "MYS",
              "value": countMalaysia
            },
            {
                "id": "USA",
                "value": countAmerika
              },
            {
              "id": "RUS",
              "value": countRusia
            },
            {
              "id": "CAN",
              "value": countCanada
            },
            {
              "id": "JPN",
              "value": countJepang
            },
            {
              "id": "CHN",
              "value": countChina
            },
            {
              "id": "ISR",
              "value": countIsrael
            }]
        return(
                <ResponsiveChoropleth
                    data={datanya}
                    features={data.features}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    colors="nivo"
                    domain={[ 0, 30 ]}
                    unknownColor="#666666"
                    label="properties.name"
                    valueFormat=".2s"
                    projectionTranslation={[ 0.5, 0.5 ]}
                    projectionRotation={[ 0, 0, 0 ]}
                    enableGraticule={true}
                    graticuleLineColor="#dddddd"
                    borderWidth={0.5}
                    borderColor="#152538"
                    legends={[
                        {
                            anchor: 'bottom-left',
                            direction: 'column',
                            justify: true,
                            translateX: 20,
                            translateY: -100,
                            itemsSpacing: 0,
                            itemWidth: 94,
                            itemHeight: 18,
                            itemDirection: 'left-to-right',
                            itemTextColor: '#444444',
                            itemOpacity: 0.85,
                            symbolSize: 18,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000000',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                />
            
        )
    }
}

export default GGeo;