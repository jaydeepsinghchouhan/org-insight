const initialState = {
    employees: [],
    loading: false,
  };
  
  export default function employeeReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_EMPLOYEES_START':
        return { ...state, loading: true };
      case 'FETCH_EMPLOYEES_SUCCESS':
        return { ...state, employees: action.employees, loading: false };
      default:
        return state;
    }
  }
  