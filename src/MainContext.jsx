import { useRef, useCallback, useEffect, createContext, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ( {children} ) => {

    

    return (
        <AppContext.Provider value={{ }}>
          {children}
        </AppContext.Provider>
      );
};

export const useAppContext = () => {
    return useContext(AppContext);
  };
