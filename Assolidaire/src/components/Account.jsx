import { useState } from "react"
import AccountCreation from "./creation/AccountCreation"
import User from "./User"
export default function Account() {
    const accounts = [{
        id: 1,
        mail: 'tibo@tibo.fr',
        pw: 'tibo',
    },
    {
        id: 2,
        mail: 'boti@boti.fr',
        pw: 'boti',
    },
]
 const [isLoggedIn, setIsLoggedIn] = useState(false)
 
 return (
    isLoggedIn ? <User setIsLoggedIn={setIsLoggedIn}/> : <AccountCreation setIsLoggedIn={setIsLoggedIn}/>
 )

    }