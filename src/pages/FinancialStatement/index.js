import Header from '../../components/Header';
import { StyledFinancialBalanceDiv, Container } from './styled';
import { Title } from "../../styles/title";
import { FaBalanceScale } from "react-icons/fa";
import DoughnutChart from '../../components/DoughnutChart';
import { useContext } from 'react';
import { SalesContext } from '../../providers/Sales';
import { ProductsContext } from '../../providers/Products';


export const FinancialStatement = () => {

  const { sales } = useContext(SalesContext)
  const { productsUser } = useContext(ProductsContext);
  console.log(productsUser)
    return(
        <Container>
        <Header/>
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
                {productsUser.length}
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
                {sales.length}
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
                {`${sales.reduce((acc,sale) => acc+sale.pesoAprox, 0).toFixed(1)} kg`}
              </Title>
            </div>
          </div>
        </StyledFinancialBalanceDiv>
          <DoughnutChart/>
        </Container>
    )
}