import firebaseConfig from "./firebaseconfig"
import {initializeApp} from "firebase/app"
import { getAuth,GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import NavBar from "./NavBar"
import { useState } from "react"
import Button from '@mui/material/Button'

function Login(){
    const [userMail,setUser] = useState("");

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()

    function signIn(){
        signInWithPopup(auth,provider).then((result)=>{
            // const credential = result.credential
            const user = result.user.email
            console.log(user)
            setUser(user)

        }).catch((err)=>{
            console.log(err.message)
        })
    }
    

    return(
        <>
            <NavBar />
            <div className="layout">
                <Button variant="contained" size="large" onClick={signIn}> Sign In with Google</Button>
            </div>
        </>
    )
}

export default Login