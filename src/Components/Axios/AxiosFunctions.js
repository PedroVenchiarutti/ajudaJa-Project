import axios from "axios";
import { urlGetUser, urlSignUp } from "./AxiosRoutes";

export const postSignUp = (url) => {
    axios.post(urlSignUp,  {
        username: userName,
        email: email,
        password: password,
        passwordConfirmation: confirmPassword,  
        birthday: dateNasc,
        emergencynumber: "11999999999",
        helth_insurance: "Nao",
        gender: sex,
        name: firstName,
        lastname:  lastName,
        avatar: url,
    }
        ).then((response) => {
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })
    }





// DEV ONLY

export const get = () => {
    axios.get(urlGetUser, {
        headers: {
            authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTksImlhdCI6MTY2NjA5NTUwMiwiZXhwIjoxNjY2MTA5OTAyfQ.SIOrUO6eAPgr-7BKF4ykZcuF0pOYHN2wcdZKD_6G0NQ'
        }
    }).then((response) => {
        console.log(response)
    }).catch((err) => {
        console.log(err)
    })
}