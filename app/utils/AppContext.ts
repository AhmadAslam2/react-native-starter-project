import {listingsInterface, defaultData} from './cardData';
import {createContext, Dispatch, SetStateAction} from 'react';

interface AppContextInterface {
  user: boolean;
  setUser: Dispatch<SetStateAction<boolean>>;
  listings: listingsInterface[] | undefined;
  setListings: Dispatch<SetStateAction<listingsInterface[]>>;
}

export const AppContext = createContext<AppContextInterface>({
  user: false,
  setUser: () => true,
  listings: undefined,
  setListings: () => defaultData,
});
