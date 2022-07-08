import Header from '../../components/Header';
import { StyledFinancialBalanceDiv } from './styled';
import { Title } from "../../styles/title";
import { FaBalanceScale } from "react-icons/fa";
import DoughnutChart from '../../components/DoughnutChart';

export const FinancialStatement = () => {
    return(
        <>
        <Header/>
        <StyledFinancialBalanceDiv>
          <div className='balance-div'>
            <figure>
              <FaBalanceScale />
            </figure>
            <Title
              tag={"h3"}
              titleSize={"h3"}
              color={"var(--primary-color)"}
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
                color={"var(--grey-4)"}
                fontStyle={"inherit"}
                weight={"400"}
                padding={"0"}
              >
                Produtos
              </Title>
              <Title
                tag={"h3"}
                titleSize={"h3"}
                color={"var(--primary-color)"}
                fontStyle={"inherit"}
                weight={"400"}
                padding={"0"}
              >
                0
              </Title>
            </div>

            <div>
              <Title
                tag={"h3"}
                titleSize={"h3"}
                color={"var(--grey-4)"}
                fontStyle={"inherit"}
                weight={"400"}
                padding={"0"}
              >
                Vendas
              </Title>
              <Title
                tag={"h3"}
                titleSize={"h3"}
                color={"var(--primary-color)"}
                fontStyle={"inherit"}
                weight={"400"}
                padding={"0"}
              >
                0
              </Title>
            </div>

            <div>
              <Title
                tag={"h3"}
                titleSize={"h3"}
                color={"var(--grey-4)"}
                fontStyle={"inherit"}
                weight={"400"}
                padding={"0"}
              >
                Perdas Evitadas
              </Title>
              <Title
                tag={"h3"}
                titleSize={"h3"}
                color={"var(--primary-color)"}
                fontStyle={"inherit"}
                weight={"400"}
                padding={"0"}
              >
                0
              </Title>
            </div>
          </div>
          <DoughnutChart/>
        </StyledFinancialBalanceDiv>
        </>
    )
}