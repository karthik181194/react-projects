import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';
const initialState = {
    transactions:[
  { id: 1, text: 'Bottle', amount: -20 },
   { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
 { id: 4, text: 'Wallet', amount: 150 }
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const[state,dispatch] = useReducer(AppReducer,initialState);

    function deleteTransaction(id){
        dispatch({
            type:'Delete',
            payload: id
        })
    }
    function addTransaction(transaction){
        console.log(transaction)
        dispatch({
            type:'addTransaction',
            payload:transaction
        })
    }
    return(<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
        </GlobalContext.Provider>);
}