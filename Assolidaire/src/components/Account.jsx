import { useState } from "react"
import AccountCreation from "./creation/AccountCreation"
import User from "./User"
export default function Account() {
 const [isLoggedIn, setIsLoggedIn] = useState(false)
 
 return (
    isLoggedIn ? <User setIsLoggedIn={setIsLoggedIn}/> : <AccountCreation setIsLoggedIn={setIsLoggedIn}/>
 )

    }