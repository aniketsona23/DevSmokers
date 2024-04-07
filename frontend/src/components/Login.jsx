import firebaseConfig from "./firebaseconfig"
import {initializeApp} from "firebase/app"
import { getAuth,GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import NavBar from "./NavBar"
import { useState } from "react"
import Button from '@mui/material/Button'
import axios from "axios"

function Login(){
    const [userMail,setUser] = useState("");

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()

    const authenticate = async (email)=>{

        try{
            console.log(email)
            const request = await axios.get("/auth",{
                params:{
                    userMail:email
                }
            })
        }catch(err){
            console.log(err)
        }
        
        // if (request!="Invalid"){
        //     console.log("Valid User")
        // }else{
        //     console.log("Invalid User")
        // }
    }
    const signIn =  async ()=>{
        const result = await signInWithPopup(auth,provider)
        const user  = result.user.email
        await authenticate(user)
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