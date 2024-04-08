import NavBar from "./NavBar"
import DashBoard from "./dashBoard"


function Home (){
    return(
        <div className="main">
            <NavBar />
            <DashBoard />
        </div>
    )
}

export default Home