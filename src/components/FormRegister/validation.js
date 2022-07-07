import * as yup from 'yup';

const phoneRegExp = /^(((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\))[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;



const schema0 =yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    account: yup.string().required('Escolha uma opção'),
    email: yup
      .string()
      .email("Formato de email incorreto")
      .required("E-mail obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Sua senha deve ter pelo menos 6 caracteres"),
    
});

const schema1 =yup.object().shape({
    type: yup.string().required("Escolha uma opção"),
    identify: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Informe seu contato").matches(phoneRegExp, "Inválido"),
    
});

const schema2 =yup.object().shape({
    cep: yup.string().required("Informe seu CEP"),
    number: yup.string().required("Informe o número"),
    street: yup.string(),
    //.required("Informe a rua"),
    district: yup.string()
    //.required("Informe o bairro")
});

export const schemas = [schema0,schema1,schema2]