import { Card } from "./styled"


const CardApresentationData = ({ text, Icon}) => {

    return (
        <Card>
            {Icon}
            <p>{text}</p>
        </Card>
    )


}

export default CardApresentationData