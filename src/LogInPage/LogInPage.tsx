import React from 'react'
import './LogInPage.css'
import { Redirect } from 'react-router'
import { Api } from './api'
import ChatPage from './chatPage'

interface Props {
    // email: string
    // pw: string
}

interface User {
    email: string
    pw: string
    redirect?: Boolean
}

class LogIn extends React.Component<Props, User> {
    api: Api;
    constructor() {

        const props: Props = { email: '', pw: '' }
        super(props);
        this.api = new Api()
        this.state = {
            email: '',
            pw: '',
            redirect: false
        };

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePw = this.handleChangePw.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ email: event.target.value });
    }

    handleChangePw(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ pw: event.target.value });
    }


    async handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('123')
        const user = {
            email: this.state.email,
            pw: this.state.pw
        };
        const res = await this.api.logInHttp(user)

        await this.setState({ redirect: true });
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return < ChatPage />
        }
        return (
            <>
                <div className="LogIn">
                    <form onSubmit={this.handleSubmit}>

                        <input style={{ height: '30px' }} type="text" value={this.state.email} onChange={this.handleChangeEmail} />
                        <input style={{ height: '30px' }} type="text" value={this.state.pw} onChange={this.handleChangePw} />

                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </>
        );
    }
}

export default LogIn




