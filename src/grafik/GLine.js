import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import {readWarga} from '../function/WargaFunction';

class GLine extends React.Component {
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
        const mGolA = arr.filter(a=>a.ekonomi==='Menengah' && a.gol ==='A');
        const mGolTotA = mGolA.length;
        const mGolB = arr.filter(a=>a.ekonomi==='Menengah' && a.gol ==='B');
        const mGolTotB = mGolB.length;
        const mGolAB = arr.filter(a=>a.ekonomi==='Menengah' && a.gol ==='AB');
        const mGolTotAB = mGolAB.length;
        const mGolO = arr.filter(a=>a.ekonomi==='Menengah' && a.gol ==='AO');
        const mGolTotO = mGolO.length;

        const kaGolA = arr.filter(a=>a.ekonomi==='Keatas' && a.gol ==='A');
        const kaGolTotA = kaGolA.length;
        const kaGolB = arr.filter(a=>a.ekonomi==='Keatas' && a.gol ==='B');
        const kaGolTotB = kaGolB.length;
        const kaGolAB = arr.filter(a=>a.ekonomi==='Keatas' && a.gol ==='AB');
        const kaGolTotAB = kaGolAB.length;
        const kaGolO = arr.filter(a=>a.ekonomi==='Keatas' && a.gol ==='O');
        const kaGolTotO = kaGolO.length;

        const kbGolA = arr.filter(a=>a.ekonomi==='Kebawah' && a.gol ==='A');
        const kbGolTotA = kbGolA.length;
        const kbGolB = arr.filter(a=>a.ekonomi==='Kebawah' && a.gol ==='B');
        const kbGolTotB = kbGolB.length;
        const kbGolAB = arr.filter(a=>a.ekonomi==='Kebawah' && a.gol ==='AB');
        const kbGolTotAB = kbGolAB.length;
        const kbGolO = arr.filter(a=>a.ekonomi==='Kebawah' && a.gol ==='O');
        const kbGolTotO = kbGolO.length;

        const datanya=[
            {
                "id": "Kebawah",
                "color": "hsl(21, 70%, 50%)",
                "data": [
                  {
                    "x": "A",
                    "y": kbGolTotA
                  },
                  {
                    "x": "B",
                    "y": kbGolTotB
                  },
                  {
                    "x": "AB",
                    "y": kbGolTotAB
                  },
                  {
                    "x": "O",
                    "y": kbGolTotO
                  }
                ]
              },
              {
                "id": "Menengah",
                "color": "hsl(21, 70%, 50%)",
                "data": [
                  {
                    "x": "A",
                    "y": mGolTotA
                  },
                  {
                    "x": "B",
                    "y": mGolTotB
                  },
                  {
                    "x": "AB",
                    "y": mGolTotAB
                  },
                  {
                    "x": "O",
                    "y": mGolTotO
                  }
                ]
              },
              {
                "id": "Keatas",
                "color": "hsl(21, 70%, 50%)",
                "data": [
                  {
                    "x": "A",
                    "y": kaGolTotA
                  },
                  {
                    "x": "B",
                    "y": kaGolTotB
                  },
                  {
                    "x": "AB",
                    "y": kaGolTotAB
                  },
                  {
                    "x": "O",
                    "y": kaGolTotO
                  }
                ]
              }
        ]

        console.log(kbGolO.length)
        return(
                <ResponsiveLine
                    data={datanya}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                    yFormat=" >-.2f"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Golongan Darah',
                        legendOffset: 36,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Jumlah',
                        legendOffset: -40,
                        legendPosition: 'middle'
                    }}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 100,
                            translateY: 0,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
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

export default GLine;