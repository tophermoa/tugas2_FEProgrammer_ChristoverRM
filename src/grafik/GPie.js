import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import {readWarga} from '../function/WargaFunction';

class GPie extends React.Component{
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
        //islam
        const Islam = arr.filter(a=>a.agama==='Islam');
        const countIslam = parseInt((Islam.length/arr.length)*100);
        //kristen
        const Kristen = arr.filter(a=>a.agama==='Kristen');
        const countKristen = parseInt((Kristen.length/arr.length)*100);
        //budha
        const Budha = arr.filter(a=>a.agama==='Budha');
        const countBudha = parseInt((Budha.length/arr.length)*100);
        //hindu
        const Hindu = arr.filter(a=>a.agama==='Hindu');
        const countHindu = parseInt((Hindu.length/arr.length)*100);


        console.log(arr)

        const datanya=[
            {
                "id": "islam",
                "label": "islam",
                "value": countIslam,
                "color": "hsl(340, 70%, 50%)"
              },
              {
                "id": "kristen",
                "label": "kristen",
                "value": countKristen,
                "color": "hsl(278, 70%, 50%)"
              },
              {
                "id": "budha",
                "label": "budha",
                "value": countBudha,
                "color": "hsl(272, 70%, 50%)"
              },
              {
                "id": "hindu",
                "label": "hindu",
                "value": countHindu,
                "color": "hsl(215, 70%, 50%)"
              }
        ]
        return(
            <ResponsivePie
                data={datanya}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors={{ scheme: 'nivo' }}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                radialLabelsSkipAngle={10}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#333333"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={16}
                radialLabelsLinkHorizontalLength={24}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor={{ from: 'color' }}
                slicesLabelsSkipAngle={10}
                slicesLabelsTextColor="#333333"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        translateY: 56,
                        itemWidth: 70,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />
        )
    }
}

export default GPie;