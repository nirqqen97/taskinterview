import { useParams } from "react-router-dom";
import { getStreamerById } from "../../Api";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Info } from "./StreamDescription.styled";
import { Container } from "../../App.styled";
import { Wrap } from "../StreamerList/StreamerList.styled";

export const StreamerDescription = () => {
  const [streamer, setStreamer] = useState([]);
  const { streamerId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getStreamerById(streamerId);
      setStreamer(response);
    };
    fetchData();
  }, [streamerId]);

  return (
    <>
      <Header />
      <Container>
        <Wrap>
          <Info> Name : {streamer.author}</Info>
          <Info> Description : {streamer.description}</Info>
        </Wrap>
        <Wrap>
          <Info> UpVotes : {streamer.upvote}</Info>
          <Info> DownVotes : {streamer.downvote}</Info>
        </Wrap>
        <Wrap>
          <Info> Platform : {streamer.platform}</Info>
        </Wrap>
        <Wrap>
          <img
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png"
            alt="streamer image"
          />
        </Wrap>
      </Container>
    </>
  );
};
