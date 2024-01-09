export const fetchExpenses = async () => {
    try {
        const response = await fetch(`http://localhost:8000/expenses`);

        if (!response.ok) {
            console.log(`Request Failed with status: ${response.status}`)
            throw new Error("Some error occurred");
        }

        const data = await response.json();
        return data;
    }
    catch(error) {
        throw new Error("Some error occurred");
    }
}

// n number of export statements

export const fetchExpensesById = async (id) => {
    // add code
    try {
        const response = await fetch(`http://localhost:8000/expenses/${id}`);
        
        if (!response.ok) {
            console.log(`Request Failed with status: ${response.status}`)
            throw new Error("Some error occurred");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error("Some error occurred");
    }
}