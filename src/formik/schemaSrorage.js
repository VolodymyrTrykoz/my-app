import * as yup from "yup";

const schema = {
  first: yup.object().shape({
      email: yup.string().email('Введіть валідний e-mail').required('Введіть ваш e-mail'),
      password: yup.string().required('Так а пароль я за тебе вводити буду?'),
  })
};

export default schema;