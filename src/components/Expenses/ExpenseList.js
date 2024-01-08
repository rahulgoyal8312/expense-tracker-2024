import { useState, useEffect } from "react";
import ExpenseListItemComponent from "./ExpenseListItem";
import { fetchExpenses } from "./../../services/api"

const ExpenseListComponent = () => {
    const [data, setData] = useState([]);
    // const data = [
    //     {
    //         id: 1,
    //         title: "Expense 1",
    //         amount: 2000,
    //         type: "Credit",
    //         month: "January",
    //         day: 2
    //     },
    //     {
    //         id: 2,
    //         title: "Expense 2",
    //         amount: 500,
    //         type: "Debit",
    //         month: "January",
    //         day: 4
    //     },
    //     {
    //         id: 3,
    //         title: "Expense 3",
    //         amount: 20000,
    //         type: "Credit",
    //         month: "January",
    //         day: 1
    //     }
    // ];

    useEffect(() => {
        // For REFERENCE
        // const fetchExpenses = async () => {
        //     const response = await fetch(`http://localhost:8000/expenses`);
        //     const data = await response.json();
        //     return data;
        // }

        fetchExpenses().then(response => {
            setData(response);
        }).catch(error => {
            console.log("Error occurred while fetching the expenses.");
            console.error(error);
        })
    }, []);

    return (
        <div className="layout-container__wrapper">
            <div className="flexbox flexbox-justify-between flexbox-align-baseline">
                <h3>Expenses</h3>
                <span className="pill info">INR 770</span>
            </div>
            <hr />
            <div className="layout-container__expenses">
                <ul>
                    {/* <ExpenseListItemComponent
                        data={data[0]}
                    />
                    <ExpenseListItemComponent
                        data={data[1]}
                    />
                    <ExpenseListItemComponent
                        data={data[2]}
                    /> */}
                    {
                        data.map((item, index) => {
                            return (
                                <ExpenseListItemComponent
                                    key={item.id}
                                    data={item}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ExpenseListComponent;