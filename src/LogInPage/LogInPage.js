import React from 'react'
import './LogInPage.css'
import axios from 'axios'

class NameForm extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            email: '',
            psw: ''
        };

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePsw = this.handleChangePsw.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    handleChangePsw(event) {
        this.setState({ psw: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = {
            email: this.state.email,
            psw: this.state.psw
        };

        axios.post(`https://adzzplaybook.azurewebsites.net/api/login`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (

            <>
                <div className="LogIn">
                    <form onSubmit={this.handleSubmit}>

                        <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
                        <input type="text" value={this.state.psw} onChange={this.handleChangePsw} />

                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </>
        );
    }
}


function LogIn(props) {
    return (
        <>
            <NameForm />

        </>
    )
}



export default LogIn