import {instance} from './client';

const login = (email: string, password: string) => {
  return instance.post('/auth', {email, password});
};

export default {
  login,
};
