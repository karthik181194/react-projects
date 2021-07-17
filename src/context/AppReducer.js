const AppReducer = (state,action) => {
    switch(action.type) {
        case 'Delete':
            return({
                ...state,
                transactions:state.transactions.filter(transaction => transaction.id !== action.payload)
            })
         case 'addTransaction':  
         return({
             ...state,
             transactions:[action.payload,...state.transactions]
         }) 
        default:
            return state;
    }
}
export default AppReducer;