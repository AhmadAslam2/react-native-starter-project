import {createContext, Dispatch, SetStateAction} from 'react';

interface AppContextInterface {
  user: boolean;
  setUser: Dispatch<SetStateAction<boolean>>;
  newListing: boolean;
  toggleNewListing: () => void;
}

export const AppContext = createContext<AppContextInterface>({
  user: false,
  setUser: () => true,
  newListing: false,
  toggleNewListing: () => {},
});
