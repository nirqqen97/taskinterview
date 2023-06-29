import { useParams } from "react-router-dom"
import { getStreamerById } from "../../Api";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Info } from "./StreamDescription.styled";
import { Container } from "../../App.styled";
import { Wrap } from "../StreamerList/StreamerList.styled";


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
        <Container>
          <Wrap>
            <Info>{streamer.author}</Info>
            <Info>{streamer.description}</Info>
            <Info>{streamer.upvote}</Info>
            <Info>{streamer.downvote}</Info>
            <Info>{streamer.platform}</Info>  
            </Wrap>
            
            </Container>
        </>
    )
}