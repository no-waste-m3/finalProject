import Header from '../../components/Header';
import { StyledFinancialBalanceDiv, Container, FirstBalance, SecondBalance } from './styled';
import { Title } from "../../styles/title";
import { FaBalanceScale } from "react-icons/fa";
import DoughnutChart from '../../components/DoughnutChart';
import { useContext, useEffect, useState } from 'react';
import { SalesContext } from '../../providers/Sales';
import { ProductsContext } from '../../providers/Products';
import priceFormat from '../../util/priceFormat';
import BarChartComponent from '../../components/BarChart';


export const FinancialStatement = () => {

  const { sales, getSales, totalMoney, salesTotal, productsCount } = useContext(SalesContext)
  const {  getProductsUser } = useContext(ProductsContext);

  const [dataMonths, setDataMonths] = useState([])

  const actualDate = new Date()

  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'].slice(0, actualDate.getMonth()+1)

  const getdataMonths = ()  => {

    let data = [0,0,0,0,0,0,0,0,0,0,0,0].slice(0, actualDate.getMonth()+1)
    
    sales.forEach((sale, index) => {
      
      const date = new Date(sale.date)
  
      const month = date.getMonth()

      if(month) {

        if(data[month] !== 0) {
          data[month] += 1
        } else {
          data[month] = 1
        }

      }
      
      
    }) 

    setDataMonths([...data])
  }

  
  useEffect(() => {
    getSales()
    getProductsUser();
  }, [])

  useEffect(() => {

    getdataMonths()
    
  }, [sales])


  
  const cost = sales.reduce((acc,sale) => { 
              
    if(sale.precoDeCusto) {
      return acc+Number(sale.precoDeCusto)
    } return acc
  }, 0)
  const lucro = sales.reduce((acc,sale) => {            
    if(sale.precoDeCusto) {
      return acc+Number(sale.precoDeRevenda)
    } return acc
  }, 0)


  const kgTotal = (sales.reduce((acc,sale) => acc+Number(sale.pesoAprox), 0) * 2.8).toFixed(1)
  
    return(
        <Container>
        <Header/>
          <FirstBalance>
        <StyledFinancialBalanceDiv>
            <div className='balance-div'>
            <figure>
              <FaBalanceScale />
            </figure>
            <Title
              tag={"h3"}
              titleSize={"h3"}
              color={"var(--invert)"}
              fontStyle={"inherit"}
              weight={"400"}
              padding={"0"}
            >
              Balanço Resumido
            </Title>
          </div>
          <div className="text-div">
            <div>
              <Title
                tag={"h3"}
                titleSize={"h3"}
                color={"var(--invert)"}
                fontStyle={"inherit"}
                weight={"400"}
                padding={"0"}
              >
                Produtos
              </Title>
              <Title
                tag={"h3"}
                titleSize={"h3"}
                color={"var(--invert)"}
                fontStyle={"inherit"}
                weight={"400"}
                padding={"0"}
              >
                {productsCount}
              </Title>
            </div>

            <div>
              <Title
                tag={"h3"}
                titleSize={"h3"}
                color={"var(--invert)"}
                fontStyle={"inherit"}
                weight={"400"}
                padding={"0"}
              >
                Vendas
              </Title>
              <Title
                tag={"h3"}
                titleSize={"h3"}
                color={"var(--invert)"}
                fontStyle={"inherit"}
                weight={"400"}
                padding={"0"}
              >
                {salesTotal}
              </Title>
            </div>

            <div>
              <Title
                tag={"h3"}
                titleSize={"h3"}
                color={"var(--invert)"}
                fontStyle={"inherit"}
                weight={"400"}
                padding={"0"}
              >
                Perdas Evitadas
              </Title>
              <Title
                tag={"h3"}
                titleSize={"h3"}
                color={"var(--invert)"}
                fontStyle={"inherit"}
                weight={"400"}
                padding={"0"}
              >
  
                {priceFormat(totalMoney)}
              </Title>
            </div>
            <div className='last'>
              <Title
                tag={"h3"}
                titleSize={"h3"}
                color={"green"}
                fontStyle={"inherit"}
                weight={"400"}
                padding={"0"}
              >
                Redução de CO²
              </Title>
              <Title
                tag={"h3"}
                titleSize={"h3"}
                color={"green"}
                fontStyle={"inherit"}
                weight={"400"}
                padding={"0"}
              >
                {`${kgTotal} kg` }

              </Title>
            </div>
          </div>
        </StyledFinancialBalanceDiv>
          <DoughnutChart title={'Controle de custos'} dataGraph={[cost, lucro]} labels={['Custos', 'Lucros']}/>
          </FirstBalance>

          <SecondBalance>
          <BarChartComponent title={'Vendas por mês do ano de 2022'} labels={months} dataGraph={dataMonths}/>
          </SecondBalance>
        </Container>
    )
}