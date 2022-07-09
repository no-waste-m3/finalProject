import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wade from "../Wade";
import { Toast } from "./styles";
import SadWade from "../SadWadeSVG";
import { useContext } from "react";
import { ThemeToastContext } from "../../providers/ThemeToast";



export const ToastNotify = () => {
  
  const { themeToast } = useContext(ThemeToastContext)
  
  return (
    <Toast wadeTheme={themeToast}>
    </Toast>
  );
};

export const notify = (message, time, type ) => {

  return toast(message, {
    icon: type === 'error' ? <SadWade/> : <Wade /> ,
    autoClose: time,
  });
};