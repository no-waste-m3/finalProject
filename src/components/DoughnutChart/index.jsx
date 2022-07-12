//import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2'
import { DoughnutContainer } from './styled';
import { Chart } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const DoughnutChart = ({dataGraph, labels, title}) => {

    //ChartJS.register(ArcElement, Tooltip, Legend);

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
        <DoughnutContainer>
          <p>{title}</p>
            <Doughnut
            
            data={newDataGraph}
            
        />
        </DoughnutContainer>

        
    )


}



export default DoughnutChart