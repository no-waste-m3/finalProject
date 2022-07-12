
import { Bar } from 'react-chartjs-2'
import { Chart } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'



const BarChartComponent = ({dataGraph, labels, title}) => {

  console.log(dataGraph)


    const data = {
        labels: labels,
        datasets: [{
          label: title,
          data: dataGraph,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      };

    const newDataGraph = {
        datasets: [{
        data: dataGraph,
        backgroundColor: [
      '#fd7d06',
      'rgb(107, 158, 11)',
      'rgb(197, 145, 67)',
      ]}],
      labels : labels
    }


    /*listTransactions.forEach((item) => {

      if(item.type==='Despesa') {
        const findIndex = newDataGraph.labels.findIndex((el) => el===item.category )
        if(findIndex>=0) {

          newDataGraph.datasets[0].data[findIndex] = newDataGraph.datasets[0].data[findIndex] + Number(item.value)

        } else {
          newDataGraph.labels.push(item.category)
          newDataGraph.datasets[0].data.push(Number(item.value))

        }
      }

    }) }*/ 


    return (
        <Bar data={data}/>
   
    )


}



export default BarChartComponent