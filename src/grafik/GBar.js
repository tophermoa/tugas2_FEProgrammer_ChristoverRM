import { ResponsiveBar } from '@nivo/bar';
import React from 'react';
import {readWarga} from '../function/WargaFunction';

class GBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            datas:[]
        }
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

    componentDidMount() {
            this.readAllWarga()
    }

    render(){
        const arr = [...this.state.datas];
        //lajang
        const Lajang = arr.filter(a=>a.status==='Lajang');
        const countLajang = parseInt((Lajang.length/arr.length) * 100);
        //nikah
        const Menikah = arr.filter(a=>a.status==='Sudah Menikah');
        const countMenikah = parseInt((Menikah.length/arr.length) *100);
        //cerai
        const Cerai = arr.filter(a=>a.status==='Cerai');
        const countCerai=parseInt((Cerai.length/arr.length) * 100);

        console.log(arr.length)
        console.log(this.state.datas)

        const datanya=[
            {
                "country": "Lajang",
                "Lajang": countLajang,
                "hot dogColor": "hsl(33, 70%, 50%)"
            },
            {
              "country": "Menikah",
              "Menikah": countMenikah,
              "burgerColor": "hsl(352, 70%, 50%)"
            },
            {
              "country": "Cerai",
              "Cerai": countCerai,
              "sandwichColor": "hsl(269, 70%, 50%)"
            }
        ]
        return(
            <ResponsiveBar
                data={datanya}
                keys={[ 'Lajang', 'Menikah', 'Cerai']}
                indexBy="country"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                colors={{ scheme: 'nivo' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'fries'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'sandwich'
                        },
                        id: 'lines'
                    }
                ]}
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Status',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Jumlah',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        )
    }
}

export default GBar;