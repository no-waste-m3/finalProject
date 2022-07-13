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

        /*const storesChanged = stores.map(async store => {
            const actualStore = store
            const distance = await getDistance(store.info.endereco)

            actualStore.distance = distance
            return actualStore
            
        });*/

    }, [])

    return (
        <StoresContainerStyled>
            
           {stores.map((store) => {
               console.log(store)
               return <CardStore key={store.id}> <img src={store.info.src} alt="" /> 
               <div><p>{store.info.razaoSocial}</p>
                <p><FaMotorcycle/>{store.distance || ' 15 mins'}</p>
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