import {useContext} from 'react';
import {AppContext, userInterface} from './../utils/AppContext';
import jwtDecode from 'jwt-decode';
import authApi from '../api/authApi';
import {storageHelper} from '../utils';

export const login = async (loginVlaues: {email: string; password: string}) => {
  const {setUser} = useContext(AppContext);

  console.log(loginVlaues);
  try {
    const res = await authApi.login(loginVlaues.email, loginVlaues.password);
    storageHelper.storeData('token', res.data);
    const user = jwtDecode<userInterface>(res.data);
    setUser(user);
    storageHelper.storeData('user', user);
  } catch (err) {
    console.log(err);
  }
};
