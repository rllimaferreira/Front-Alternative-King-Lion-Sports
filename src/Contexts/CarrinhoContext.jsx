import React, { createContext, useState } from "react";
import { useEffect } from "react";

const DEFAULT_VALUE = {
  state:JSON.parse(localStorage.getItem('meuCarrinho')) || [],
  // state:[],
  setState: () => {}, //função de inicialização
};
const CarrinhoContext = createContext(DEFAULT_VALUE);
const ShopProvider = ({children}) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  

  // localStorage.setItem('meuCarrinho', JSON.stringify(state));
  return (
    <CarrinhoContext.Provider value={{state,setState}}> 
    {children}
    </CarrinhoContext.Provider>
  )
}

export { ShopProvider };
export default CarrinhoContext;