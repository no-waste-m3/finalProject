import { ContainerLoading } from "./styled"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import { IsLoadingContext } from "../../providers/IsLoading";
import cenoura from "../../assets/CenouraPNG.png"


const Loading = () => {

    const { percentage } = useContext(IsLoadingContext)

    return (
        <ContainerLoading>

            

        <div>
        <img src={cenoura} alt="cenoura" />
        <CircularProgressbar value={percentage} styles={buildStyles({
    
    textSize: '16px',

    pathTransitionDuration: 0.4,

    pathColor: 'var(--primary-color)',
    textColor: 'var(--primary-color)',
    trailColor: 'transparent',
    backgroundColor: 'var(--primary-color)',
  })}/>
        </div>
        </ContainerLoading>
    )

}

export default Loading