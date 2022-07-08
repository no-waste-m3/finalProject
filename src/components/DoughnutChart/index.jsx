import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2'

const DoughnutChart = ({dataGraph}) => {

    ChartJS.register(ArcElement, Tooltip, Legend);

    const newDataGraph = {
        datasets: [{
        data: [20,10,5],
        backgroundColor: [
      'rgb(197, 145, 67)',
      '#fd7d06',
      'rgb(107, 158, 11)',
      ]}],
      labels : ['Produtos', 'Vendas', 'Perdas evitadas']
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
        <div style={{width:'280px', height:'300px'}}>
            <Doughnut
            
            data={dataGraph || newDataGraph}
            
        />
        </div>

        
    )


}



export default DoughnutChart