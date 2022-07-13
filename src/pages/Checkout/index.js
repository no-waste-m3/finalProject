import { Barcode, CreditCard } from 'phosphor-react';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import Header from '../../components/Header';
import { notify } from '../../components/Toasts';
import { CartContext } from '../../providers/Cart';
import { SalesContext } from '../../providers/Sales';
import { ThemeToastContext } from '../../providers/ThemeToast';
import PixIcon from "../../assets/pix-brands.svg"

import { Container, Details, Payment } from './styles';
import  Input from '../../components/Input';
import CartProducts from '../../components/CartProducts';
import CartPrice from '../../components/CartPrice';
import { Title } from 'chart.js';
import CartQuantity from '../../components/CartQuantity';

export const Checkout =() =>  {

  const { cart, setCart, deleteCart } = useContext(CartContext)
  const { addSales } = useContext(SalesContext)
  const { changeThemeToast } = useContext(ThemeToastContext)
  const navigate = useNavigate()

  const [typeOfPayment, setTypeOfPayment] = useState('card')

  const finish = async () => {

    await cart.forEach(async (product) => await addSales(product))

    changeThemeToast('success') 
    
    notify(`Compra feita com sucesso! Você reduziu ${(cart.reduce((ac,el) => ac+el.pesoAprox, 0 )*2.8).toFixed(1)}kg de CO². Em alguns minutos chegará o seu pedido`, 5000, 'success')

    cart.forEach((product) => {
      console.log(product.id)
      deleteCart(product.id)
    })

    setTimeout(() => {

      navigate('/home')
      
    }, 6000);

  }

  
  return (
    <Container style={{marginTop: '11vh'}}>
      <Header></Header>


      <Payment>
        <h3>Formas de pagamento</h3>
        <div><button><CreditCard size={'30%'} color="var(--primary-color)" weight="fill"/><h4>Cartão de crédito</h4></button>
        <button><Barcode size={'30%'} color="var(--primary-color)" weight="fill"/><h4>Boleto</h4></button>
        <button><img src={PixIcon} alt="pix-icone"/><h4>Pix</h4></button>
        </div>
        <div>
          <form onSubmit={(e) => {
            e.preventDefault()
            finish()
          }}>
            <input placeholder='Número do cartão'/>
            <input placeholder='Nome impresso no cartão'/>
            <div><input placeholder='Mês'/><input placeholder='Ano'/></div>
            <input placeholder='Código de segurança'/>


        <Button typebutton='primary' >Finalizar compra</Button>
          </form>
        </div>
      </Payment>

      <Details>
        <h3> Detalhes da compra</h3>

        <CartProducts onCheckout={true}/>
        <div> <h4>Total a pagar</h4>
                
        <CartPrice color="var(--primary-color)" fontSize="17px" /></div>
           
      </Details>
      
    </Container>
  );
}