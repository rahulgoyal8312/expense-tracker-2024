import { useState } from "react";

const ExpenseFormComponent = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(1000);
    const [date, setDate] = useState("");
    const [type, setType] = useState("");

    const updateTitle = (event) => {
        setTitle(event.target.value);
    }
    const updateDescription = (event) => {
        setDescription(event.target.value);
    }
    const updateAmount = (event) => {
        setAmount(event.target.value);
    }
    const updateDate = (event) => {
        setDate(event.target.value);
    }
    const updateType = (event) => {
        setType(event.target.value);
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();

        console.log({
            title,
            description,
            date,
            amount,
            type
        })
    }
    
    return (
        <div className="layout-container__wrapper">
            <div className="heading">
                <h3>ADD Expense Log</h3>
            </div>
            <hr />
            {/* Assignment to create a reset function */}
            <form onSubmit={handleFormSubmission} onReset={() => console.log("Form Reset!!")}>
                <div className="form-wrap">
                    <label htmlFor="title">Title</label>
                    <input type="text" placeholder="Enter title"
                        name="title" className="form-input" required
                        onChange={updateTitle}
                        value={title}    
                    />
                </div>
                <div className="form-wrap">
                    <label htmlFor="description">Description</label>
                    <textarea name="description"
                        className="form-textarea" placeholder="Enter Description" rows="4" onChange={updateDescription}
                        value={description}
                        >
                        </textarea>``
                </div>
                <div className="form-wrap">
                    <label htmlFor="amount">Amount</label>
                    <input type="number"
                        placeholder="Enter Amount" name="amount" className="form-input" min="0" required="" 
                        onChange={updateAmount}
                        value={amount}
                        />
                </div>
                <div className="flexbox">
                    <div className="form-wrap flexbox-child__fb50 pr-5">
                        <label htmlFor="date">Date</label>
                        <input type="date"
                            className="form-input" name="date" placeholder="Enter date" 
                            onChange={updateDate}
                            value={date}
                            />
                    </div>
                    <div className="form-wrap flexbox-child__fb50 pl-5">
                        <label htmlFor="type">Select Type</label>
                        <select
                            value={type}
                            onChange={updateType}
                            className="form-select" name="type" required="">
                            <option value="">Select type</option>
                            <option value="1">Credit</option>
                            <option value="2">Debit</option>
                        </select>
                    </div>
                </div>
                <div className="flexbox flexbox-reverse">
                    <button className="btn" type="submit"><span>ADD Expense</span></button>
                    <button className="btn mr-5" type="reset"><span>Clear</span></button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseFormComponent;