import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required().min(1).label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});
