import { useParams } from "react-router-dom"
import { getStreamerById } from "../../Api";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";


export const StreamerDescription = ( ) => {
    const [streamer, setStreamer] = useState([])
    const {streamerId} = useParams()
    useEffect(() => {
        const fetchData = async () => {
          const response = await getStreamerById(streamerId);
          setStreamer(response);
          
        };
        fetchData();
      }, []);
    
    return (
        <>
        <Header/>
            {streamer.author}
            {streamer.description}
            {streamer.upvote}
            {streamer.downvote}
            {streamer.platform}  
        </>
    )
}