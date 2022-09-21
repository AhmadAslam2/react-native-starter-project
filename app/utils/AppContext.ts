import {createContext, Dispatch, SetStateAction} from 'react';

interface AppContextInterface {
  user: any | null;
  setUser: Dispatch<SetStateAction<any>>;
  newListing: boolean;
  toggleNewListing: () => void;
}

export const AppContext = createContext<AppContextInterface>({
  user: null,
  setUser: () => {},
  newListing: false,
  toggleNewListing: () => {},
});
