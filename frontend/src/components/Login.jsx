    import firebaseConfig from "./firebaseconfig"
    import {initializeApp} from "firebase/app"
    import { getAuth,GoogleAuthProvider, signInWithPopup} from "firebase/auth"
    import NavBar from "./NavBar"
    import "./styles/login.css"
    // import { useStatee } from "react"
    import Button from '@mui/material/Button'
    import axios from "axios"

    function Login(){
        // const [userMail,setUser] = useState("");

        const app = initializeApp(firebaseConfig)
        const auth = getAuth(app)
        const provider = new GoogleAuthProvider()

        const authenticate = async (email)=>{

            try{
                console.log(email)
                const request = await axios.get("/api/auth",{
                    params:{
                        email:email
                    }
                })

                if (request.data.role!="Invalid"){
                    console.log("Valid User")
                }else{
                    console.log("Invalid User")
                }
            }catch(err){
                console.log(err)
            }
        }
        const signIn =  async ()=>{
            const result = await signInWithPopup(auth,provider)
            const user  = result.user.email
            await authenticate(user)
        }
        

        return(
            <div className="login-page">
                <NavBar />
                <div className="layout">
                    <Button variant="contained" size="large" onClick={signIn}> Sign In with Google</Button>
                </div>
            </div>
        )
    }

    export default Login