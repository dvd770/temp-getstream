import axios from 'axios'

interface LogInUser {
    email: string
    pw: string
}

interface GetStreamUser {
    id: string
    getstreamKey: string
    getstreamToken: string
}

export class Api {

    async logInHttp(user: LogInUser) {
        const getStreamUser = await axios.post('https://adzzplaybook.azurewebsites.net/api/login', user);
        return getStreamUser.data as GetStreamUser
    }

}