import { Link } from "react-router-dom"
import { StreamerCard } from "../../components/Card/StreamerCard"
import { StreamerForm } from "../../components/Form/StreamerForm"



export const StreamerList = ( ) => {
    return(
        <Link to="description">
     <StreamerForm/>
    <StreamerCard/>
    </Link>

  )
}