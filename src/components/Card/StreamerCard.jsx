import { useNavigate } from "react-router-dom";
import React from "react";
import { PropTypes } from "prop-types";
import {
  CardView,
  CircleImage,
  DownSidePart,
  Image,
  Info,
  Line,
  UpSidePart,
  Button,
  ButtonWrap,
} from "./StreamerCard.styled";
import messagePhoto from "../Images/pic.svg";
import testPic from "../Images/Hansel.svg";
import { voteStreamer } from "../../Api";

export const StreamerCard = React.memo(({ user, onVote }) => {
  const {
    _id,
    author,
    description,
    platform,
    upvote,
    downvote,
    isUpvoted,
    isDownVoted,
  } = user;

  const navigate = useNavigate();

  const handleVote = async (voteType) => {
    await voteStreamer(_id, voteType);
    const updatedUser = {
      ...user,
      [voteType === "upvote" ? "upvote" : "downvote"]:
        user[voteType === "upvote" ? "upvote" : "downvote"] + 1,
      isUpvoted: voteType === "upvote",
      isDownVoted: voteType === "downvote",
    };
    onVote(updatedUser);
  };

  const handleCardClick = (event) => {
    const isButton = event.target.tagName.toLowerCase() === "button";
    if (!isButton) {
      navigate(`/streamers/${_id}`);
    }
  };

  const truncatedDescription =
    description.length > 18
      ? `${description.substring(0, 18)}...`
      : description;

  return (
    <CardView onClick={handleCardClick}>
      {}
      <UpSidePart>
        <Image src={messagePhoto} alt="logo image" />
      </UpSidePart>
      <Line>
        <CircleImage src={testPic} width="79" height="79" />
      </Line>
      <DownSidePart>
        <Info> NickName: {author} </Info>
        <Info> Description: {truncatedDescription}</Info>
        <Info> Platform: {platform}</Info>
        <Info>
          Upvote: {upvote} DownVote: {downvote}
        </Info>
        <ButtonWrap>
          <Button
            type="button"
            followed={isUpvoted}
            onClick={() => handleVote("upvote")}
            disabled={isUpvoted}
          >
            Upvote
          </Button>
          <Button
            type="button"
            followed={isDownVoted}
            onClick={() => handleVote("downvote")}
            disabled={isDownVoted}
          >
            Downvote
          </Button>
        </ButtonWrap>
      </DownSidePart>
    </CardView>
  );
});

StreamerCard.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    platform: PropTypes.string,
    upvote: PropTypes.number,
    downvote: PropTypes.number,
    isUpvoted: PropTypes.bool,
    isDownVoted: PropTypes.bool,
  }),
  onVote: PropTypes.func,
};
