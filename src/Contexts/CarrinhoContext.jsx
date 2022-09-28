import React, { createContext, useState } from "react";

const DEFAULT_VALUE = {
  state:[] ,
  setState: () => {}, //função de inicialização
};
const CarrinhoContext = createContext(DEFAULT_VALUE);
const ShopProvider = ({children}) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <CarrinhoContext.Provider value={{state,setState}}> 
    {children}
    </CarrinhoContext.Provider>
  )
}

export { ShopProvider };
export default CarrinhoContext;