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
                    <input type="text" className="form-control" value={firstName} onChange={(e) => {
                        setFirstName(e.target.value)
                    }}/>
                    {firstName && firstName.length < 2 ? <p>First name must be longer than 2 characters</p> : null}
                </div>

                <div className="mb-3">
                    <label className="form-label">Last Name:</label>
                    <input type="text" className="form-control" value={lastName} onChange={(e) => {
                        setLastName(e.target.value)
                    }}/>
                    {lastName && lastName.length < 2 ? <p>Last name must be longer than 2 characters</p> : null}
                </div>

                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input type="text" className="form-control" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }}/>
                    {email && email.length < 5 ? <p>Email must be longer than 2 characters</p> : null}                    
                </div>

                <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }}/>
                    {password && password.length < 8 ? <p>Password must be longer than 8 characters</p> : null}                    
                </div>

                <div className="mb-3">
                    <label className="form-label">Confirm Password:</label>
                    <input type="password" className="form-control" value={confirmPassword} onChange={(e) => {
                        setConfirmPassword(e.target.value)
                    }}/>
                    {confirmPassword && confirmPassword !== password ? <p>Passwords must match</p> : null}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
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