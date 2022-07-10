import { Trash } from "phosphor-react"
import { Button } from "../Button"
import { ContainerImagePreview, FileInfo, Preview } from "./styled"
import filesize from "filesize"




const ImagePreview = ({ image, onClickFunction }) => {

    const infos = {
        name: image[0].name,
        readableSize: filesize(image[0].size),
        preview: URL.createObjectURL(image[0])
    }

    return (
        <ContainerImagePreview>
            <Preview src={infos.preview}/>
            <FileInfo>
                <strong>{infos.name}</strong>
                <span>{infos.readableSize}</span>
            </FileInfo>
            <Button typebutton='primary' type='button' onClick={onClickFunction}><Trash/></Button>

        </ContainerImagePreview>
    )
    
}

export default ImagePreview