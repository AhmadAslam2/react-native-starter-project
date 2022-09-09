import listingsInterface from './listingInterface';
import {createContext, Dispatch, SetStateAction} from 'react';

interface AppContextInterface {
  user: boolean;
  setUser: Dispatch<SetStateAction<boolean>>;
  listings: listingsInterface[] | undefined;
}

export const AppContext = createContext<AppContextInterface>({
  user: false,
  setUser: () => true,
  listings: undefined,
});
