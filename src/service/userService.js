import {SERVER_URL} from "../API/api";

export const register = (user) =>
    fetch(`${SERVER_URL}/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => {
        console.log(response)
        if (response.ok) {
            return response.json()
        } else {
            alert("The username already exists. Please try another one.")
            return response
        }
    })


export const login = (user) =>
    fetch(`${SERVER_URL}/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => {
        if (response.ok) {
            return response.json()
        } else {
            alert("Oops! We are unable to find the username or the password is incorrect. Please try again.")
        }
    })


export const logout = () =>
    fetch(`${SERVER_URL}/logout`, {
        method: 'POST',
        credentials: "include"
    })
