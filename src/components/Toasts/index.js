import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wade from "../Wade";
import { Toast } from "./styles";

export const ToastNotify = () => {
  return (
    <Toast>
    </Toast>
  );
};

export const notify = (message, time) => {
  toast(message, {
    icon: <Wade width="5rem" height="6rem" />,
    autoClose: time,
  });
};