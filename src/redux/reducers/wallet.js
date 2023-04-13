// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

// actions;
import { CURRENCIES_INPUT, EXPENSES_INPUT, EXPENSES_FETCH } from '../actions';

// reducers
const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const wallet = (state = INITIAL_STATE, action) => {
  const lastNumber = -1;

  switch (action.type) {
  case CURRENCIES_INPUT:
    return {
      ...state,
      currencies: action.payload,
    };

  case EXPENSES_INPUT:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };

  case EXPENSES_FETCH:
    // console.log(state.expenses[state.expenses.length - 1]);
    return {
      ...state,
      expenses: [...state.expenses.slice(0, lastNumber),
        {
          ...state.expenses[state.expenses.length - 1],
          exchangeRates: action.payload,
          id: state.expenses.length - 1,
        }],
    };

  default:
    return state;
  }
};

// tentativas:
// state.expenses[state.expenses.length - 1]
// exchangeRates

export default wallet;
