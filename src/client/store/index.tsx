import React, {
  useContext,
  createContext,
  useReducer,
} from 'react';

interface InitialStateProps {
  content: string;
  turnOn: boolean;
}

const initialState: InitialStateProps = {
  content: 'home',
  turnOn: false,
}

export const constant = {
  HANDLE_CONTENT: 'HANDLE_CONTENT',
  HANDLE_LIGHT_SWITCH: 'HANDLE_LIGHT_SWITCH',
}

interface GlobalActionProps {
  type: string;
  payload?: any;
}

const reducer = (
  state = initialState,
  action: GlobalActionProps,
): InitialStateProps => {
  switch (action.type) {
    case constant.HANDLE_CONTENT:
      return { ...state, content: action.payload };
    case constant.HANDLE_LIGHT_SWITCH:
      return { ...state, turnOn: action.payload };
    default:
      return { ...state };
  }
}

interface GlobalContextProps {
  state: InitialStateProps;
  dispatch: React.Dispatch<GlobalActionProps>;
}

const GlobalContext = createContext({} as GlobalContextProps);
export const GlobalProvider: React.FC<{}> = ({ children }) => {
  const Provider = GlobalContext.Provider;
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Provider value={{ state, dispatch }}>
      {children}
    </Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
