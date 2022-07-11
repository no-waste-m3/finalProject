import { Check } from "phosphor-react"
import { Progress, ProgressBar, Step } from "./styled"


const ProgressBarStep = ({ step, stepsCounters }) => {


    return (
        <ProgressBar>{stepsCounters.map((counter, index) => <Step key={index} currentStep={step} stepCounter={counter} >{counter<step ? <Check size={16} color="#fff" weight="fill" /> : counter+1}</Step>)}
        <Progress stepsCounters={stepsCounters} currentStep={step}></Progress>
        </ProgressBar>
    )
}

export default ProgressBarStep