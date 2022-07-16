import { useState } from "react"

const Form = (props) => {
    const [firstName, setFirstName] = useState ("");
    const [lastName, setLastName] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [confirmPassword, setConfirmPassword] = useState ("");

    const createUser = (e) =>{
        e.preventDefault();
        console.log({
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        })
        setFirstName("")
        setLastName ("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    };


    return(
        <div>
            <form className="m-5 " onSubmit ={createUser}>
                <div className="mb-3">
                    <label className="form-label">First Name:</label>
                    <input type="text" className="form-control" onChange={(e) => {
                        setFirstName(e.target.value)
                    }}/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Last Name:</label>
                    <input type="text" className="form-control" onChange={(e) => {
                        setLastName(e.target.value)
                    }}/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input type="text" className="form-control" onChange={(e) => {
                        setEmail(e.target.value)
                    }}/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input type="password" className="form-control" onChange={(e) => {
                        setPassword(e.target.value)
                    }}/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Confirm Password:</label>
                    <input type="password" className="form-control" onChange={(e) => {
                        setConfirmPassword(e.target.value)
                    }}/>
                </div>

            </form>

            <div className ="container">
                <h1>Your Form Data</h1>
                <h4>First Name: {firstName}</h4>
                <h4>Last Name: {lastName}</h4>
                <h4>Email: {email}</h4>
                <h4>Password: {password}</h4>
                <h4>Confirm Password: {confirmPassword}</h4>
            </div>

        </div>
        
    );

};

export default Form;