import { useParams } from "react-router-dom"
import { useUser } from "../components/UserContext";




const Dashboard = () => {
    const { username } = useParams();
    const { currentUser } = useUser();

    



    return(
        <h1>dashboard</h1>
    )
}


export default Dashboard