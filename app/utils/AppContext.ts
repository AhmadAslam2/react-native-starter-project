import {createContext, Dispatch, SetStateAction} from 'react';

export interface userInterface {
  userId: number;
  name: string;
  email: string;
  iat: string;
}

interface AppContextInterface {
  user: userInterface | null;
  setUser: Dispatch<SetStateAction<userInterface | null>>;
  newListing: boolean;
  toggleNewListing: () => void;
}

export const AppContext = createContext<AppContextInterface>({
  user: null,
  setUser: () => {},
  newListing: false,
  toggleNewListing: () => {},
});
