import React from "react";

const initialState = {
            email: "",
            username: "",
            password: "",
            profileImageUrl: ""
        }

class AuthForm extends React.Component {
    constructor(props){
        super(props)
        this.state = initialState;
    }

    handleChange = ev =>
        this.setState({ [ev.target.name]: ev.target.value })
    

    handleSubmit = async (ev) =>{
        ev.preventDefault();
        const { signUp, onAuth, history } = this.props;
        const type = signUp ? "signup" : "signin";
        const authResult = await onAuth(type, this.state);
        if (authResult) {
            this.setState({ ...initialState })
            history.push("/");
        }        
    }

    render(){
        const { email, password, username, profileImageUrl } = this.state;
        const { errors, heading, buttonText, signUp, removeError, history } = this.props;
        
        history.listen(()=>{
            removeError();
        })

        return(
            <div className="row justify-content-center text-center">                
                <div className="col-md-6">
                    <h1>{heading}</h1>
                    {(errors && errors.message) && (<div className="alert alert-danger">{errors.message}</div>)}
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                className="form-control"
                                type="email" 
                                name="email" 
                                id="email"
                                onChange={this.handleChange}
                                value={email}
                                required
                                />
                        </div>
                        {signUp && (
                            <div>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input 
                                        className="form-control"
                                        type="text" 
                                        name="username" 
                                        id="username"
                                        onChange={this.handleChange}
                                        value={username}
                                        required
                                        />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="profileImageUrl">Profile Image URL</label>
                                    <input 
                                        className="form-control"
                                        type="text" 
                                        name="profileImageUrl" 
                                        id="profileImageUrl"
                                        onChange={this.handleChange}
                                        value={profileImageUrl}
                                        />
                                </div>
                            </div>)}
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                className="form-control"
                                type="password" 
                                name="password" 
                                id="password"
                                onChange={this.handleChange}
                                value={password}
                                required
                                />
                        </div>
                        
                        <button className="btn btn-primary form-control">{buttonText}</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AuthForm;