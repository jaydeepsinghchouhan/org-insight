export const fetchEmployees = () => ({ type: 'FETCH_EMPLOYEES_START' });
export const setEmployees = (employees) => ({ type: 'FETCH_EMPLOYEES_SUCCESS', employees });
