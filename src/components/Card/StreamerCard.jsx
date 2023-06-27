// StreamerCard.js

import { CardView, CircleImage, DownSidePart, Image, Info, Line, UpSidePart, Button } from "./StreamerCard.styled";
import { useNavigate } from "react-router-dom";
import messagePhoto from "../Images/pic.svg";
import testPic from "../Images/Hansel.svg";
import { voteStreamer } from "../../Api";

export const StreamerCard = ({ user, onUpvote, onDownvote }) => {
  const navigate = useNavigate();

  const handleUpvote = () => {
    voteStreamer(user._id, "upvote");
    onUpvote(); 
  };

  const handleDownvote = () => {
    voteStreamer(user._id, "downvote");
    onDownvote(); 
  };

  const handleCardClick = (event) => {
    // Check if the clicked element is a button
    const isButton = event.target.tagName.toLowerCase() === "button";
    if (!isButton) {
      navigate(`/${user._id}`);
    }
  };

  const truncatedDescription = user.description.length > 18 ? user.description.substring(0, 18) + "..." : user.description;

  return (
    <CardView onClick={handleCardClick}>
      <UpSidePart>
        <Image src={messagePhoto} alt="logo image" />
      </UpSidePart>
      <Line>
        <CircleImage src={testPic} width="79" height="79" />
      </Line>
      <DownSidePart>
        <Info> NickName: {user.author} </Info>
        <Info> Description: {truncatedDescription}</Info>
        <Info> Platform: {user.platform}</Info>
        <Info>
          Upvote: {user.upvote} DownVote: {user.downvote}
        </Info>
        <div>
          <Button type="button" followed={false} onClick={handleUpvote}>
            Upvote
          </Button>
          <Button type="button" followed={false} onClick={handleDownvote}>
            Downvote
          </Button>
        </div>
      </DownSidePart>
    </CardView>
  );
};
