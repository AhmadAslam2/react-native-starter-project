import {instance} from './client';

const login = (email: string, password: string) => {
  return instance.post('/auth', {email, password});
};

const register = (registerInfo: {
  name: string;
  email: string;
  password: string;
}) => {
  return instance.post('/users', registerInfo);
};

export default {
  login,
  register,
};
