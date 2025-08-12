const initialState = {
    list: [],
    loading: false,
  };
  
  export default function employeeReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_EMPLOYEES_REQUEST':
        return { ...state, loading: true };
      case 'SET_EMPLOYEES':
        return { ...state, list: action.employees, loading: false };
      default:
        return state;
    }
  }
  