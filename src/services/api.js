export const fetchExpenses = async () => {
    const response = await fetch(`http://localhost:8000/expenses`);
    const data = await response.json();
    return data;
}

// n number of export statements

export const fetchExpensesById = async (id) => {
    // add code
}