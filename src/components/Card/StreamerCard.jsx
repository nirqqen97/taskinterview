import { CardView, CircleImage, DownSidePart, Image, Info, Line, UpSidePart, Button, ButtonWrap } from "./StreamerCard.styled";
import { useNavigate } from "react-router-dom";
import messagePhoto from "../Images/pic.svg";
import testPic from "../Images/Hansel.svg";
import { voteStreamer } from "../../Api";

export const StreamerCard = ({ user, onUpvote, onDownvote, }) => {
  const navigate = useNavigate();
  const handleUpvote = async () => {
    await voteStreamer(user._id, "upvote");
    onUpvote();
  };

  const handleDownvote = async () => {
    await voteStreamer(user._id, "downvote");
    onDownvote();
  };

  const handleCardClick = (event) => {
    const isButton = event.target.tagName.toLowerCase() === "button";
    if (!isButton) {
      navigate(`/${user._id}`);
    }
  };

  const truncatedDescription =
    user.description.length > 18 ? user.description.substring(0, 18) + "..." : user.description;

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
        <ButtonWrap>
          <Button
            type="button"
            followed={user.isUpvoted}
            onClick={handleUpvote}
            disabled={user.isUpvoted}
          >
            Upvote
          </Button>
          <Button
            type="button"
            followed={user.isDownVoted}
            onClick={handleDownvote}
            disabled={user.isDownVoted}
          >
            Downvote
          </Button>
        </ButtonWrap>
      </DownSidePart>
    </CardView>
  );
};
