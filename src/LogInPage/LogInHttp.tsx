import React from 'react'
import axios from 'axios';

interface logInBody {
    email: string,
    psw: string
}

function logInReq<logInBody>() {
    axios.post(`https://adzzplaybook.azurewebsites.net/api/login`, {})
        .then(res => {
            console.log(res);
            console.log(res.data);
        })

}