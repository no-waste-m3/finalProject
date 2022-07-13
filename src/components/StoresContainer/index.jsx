import { useContext, useEffect, useState } from "react"
import { MapsContext } from "../../providers/Maps"
import { StoresContext } from "../../providers/Stores"
import { CardStore, StoresContainerStyled } from "./styled"
import { FaMotorcycle } from "react-icons/fa";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { MdSportsMotorsports } from "react-icons/md";




const StoresContainer = () => {

    const { stores, setStores } = useContext(StoresContext)
    const { getDistance } = useContext(MapsContext)

    useEffect(() => {

        getDistancesOfStores()

    }, [])

    const getDistancesOfStores = async () => {
        await stores.forEach(async store => {
            
            await getDistance(store.info.endereco)
            .then((res) => {
                store.distance = res
                setStores([...stores])
                
            }) 
            
        })


    }

    return (
        <StoresContainerStyled>
            
           {stores.map((store) => {
               
               return <CardStore key={store.id}> <img src={store.info.src} alt="" /> 
               <div><p>{store.info.razaoSocial}</p>
                <p><FaMotorcycle/>{store.distance || <div className="loading"></div>}</p>
               </div>
               {store.info.endereco && <div>
               <p>{store.info.endereco.rua}</p>
               <p>{store.info.endereco.bairro}</p>
               <p>{store.info.endereco.cidade}-{store.info.endereco.estado}</p>
               </div>}
               </CardStore>
           })}
        </StoresContainerStyled>
    )

}

export default StoresContainer