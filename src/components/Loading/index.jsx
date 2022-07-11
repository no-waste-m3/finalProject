import { ContainerLoading } from "./styled"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import { IsLoadingContext } from "../../providers/IsLoading";


const Loading = () => {

    const { percentage } = useContext(IsLoadingContext)

    return (
        <ContainerLoading>

        <div>
        <CircularProgressbar value={percentage} text={'test'} styles={buildStyles({
    
    textSize: '16px',

    //pathTransitionDuration: 0.4,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: 'var(--primary-color)',
    textColor: 'var(--primary-color)',
    trailColor: 'var(--invert)',
    backgroundColor: 'var(--primary-color)',
  })}/>;
        </div>
        </ContainerLoading>
    )

}

export default Loading