
import { Bar } from 'react-chartjs-2'
import { Chart } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'



const BarChartComponent = ({dataGraph, labels, title}) => {

    const data = {
        labels: labels,
        datasets: [{
          label: title,
          data: dataGraph,
          backgroundColor: [
            '#fd7d06',
      'rgb(107, 158, 11)',
      'rgb(197, 145, 67)',
      '#fd7d06',
      'rgb(107, 158, 11)',
      'rgb(197, 145, 67)',
      '#fd7d06',
      'rgb(107, 158, 11)',
      'rgb(197, 145, 67)',
      '#fd7d06',
      'rgb(107, 158, 11)',
      'rgb(197, 145, 67)'
          ],
          borderColor: ['#fd7d06',
          'rgb(107, 158, 11)',
          'rgb(197, 145, 67)',
          '#fd7d06',
          'rgb(107, 158, 11)',
          'rgb(197, 145, 67)',
          '#fd7d06',
          'rgb(107, 158, 11)',
          'rgb(197, 145, 67)',
          '#fd7d06',
          'rgb(107, 158, 11)',
          'rgb(197, 145, 67)'],
          borderWidth: 1,
          borderSkipped: 'rgba(255,255,255,0.1)'
        }],
        /*options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Grid Line Settings'
            }
        },
        scales: {
            x: {
              grid: {
                display: true,
                drawBorder: true,
                drawOnChartArea: true,
                drawTicks: true,
                color: function(context) {
       
                   return 'rgb(107, 158, 11)';
                 },
              }
            },
            y: {
              grid: {
                drawBorder: true,
                color: function(context) {

      
                  return 'rgb(107, 158, 11)';
                },
              },
            }
          }
        }*/
    }

    return (
        <Bar data={data}/>
   
    )


}



export default BarChartComponent