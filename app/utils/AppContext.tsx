import {createContext, Dispatch, SetStateAction} from 'react';

interface AppContextInterface {
  user: boolean;
  setUser: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextInterface>({
  user: false,
  setUser: () => true,
});
