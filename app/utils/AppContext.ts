import {cardDataInterface, cardData} from './cardData';
import {createContext, Dispatch, SetStateAction} from 'react';

interface AppContextInterface {
  user: boolean;
  setUser: Dispatch<SetStateAction<boolean>>;
  Data: cardDataInterface[];
  setData: Dispatch<SetStateAction<cardDataInterface[]>>;
}

export const AppContext = createContext<AppContextInterface>({
  user: false,
  setUser: () => true,
  Data: cardData,
  setData: () => cardData,
});
