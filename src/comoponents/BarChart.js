
import { Bar } from 'react-chartjs-2'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,  
  BarElement,
  Tooltip
  
  
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  
  
  
);
const BarChart = ({data}) => {
    function fillColors(){
        const today= new Date();
        const dayIndex= today.getDay();
        const colorMap=[]
        for(var i=0;i<data.length;i++){
          if(i!==dayIndex-1){
            colorMap.push('hsl(10, 79%, 65%)');
          }
          else{
            colorMap.push('hsl(186, 34%, 60%)')
          }
        }
        return colorMap;

    }
    function fillHoverColors(){
      const today= new Date();
      const dayIndex= today.getDay();
      const colorMap=[]
      for(var i=0;i<data.length;i++){
        if(i!==dayIndex-1){
          colorMap.push('hsla(10, 79%, 65%,0.5)');
        }
        else{
          colorMap.push('hsla(186, 34%, 60%,0.5)')
        }
      }
      return colorMap;

  }
    

    const options = {
        responsive: true,
        maintainAspectRatio:true,
        scales:{
          
          x:{
          grid:{
            borderColor: 'rgb(255,255,255)',  
            display:false
          },
          
        },
        y:{
          display:false,
          grid:{
            display:false
          }
        },
        
       
      },
      plugins :{
        tooltip:{
          
          xAlign:'center',
          yAlign:'bottom',
          backgroundColor:'hsl(25, 47%, 15%)',
          caretSize:0,
          callbacks:{
            label:function(context) {
              let label='';
              if (context.parsed.y !== null) {
                  label += '$'+context.parsed.y;
              }
              return label;
          },
          title:function(context){
            return '';
          },
          


          }

        }
      }
      };
 const chartData = {
    labels:data.map(entry=>entry.day),
    scales: {
        xAxes: [{
            gridLines: {
                display:false
            }
        }],
        yAxes: [{
            gridLines: {
                display:false
            }   
        }]
    },
    datasets: [
      {
        
        data: data.map(entry=>entry.amount),
        backgroundColor: fillColors(),
        hoverBackgroundColor:fillHoverColors(),
        borderRadius: 5,
        borderWidth:1,
        borderSkipped:false
        

      }
    ],
  };


      
  
    return (
    <>
    <Bar options={options} data={chartData} />
    </>
  )
}

export default BarChart
