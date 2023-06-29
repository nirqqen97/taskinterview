import { StreamerCard } from "../../components/Card/StreamerCard";
import { StreamerForm } from "../../components/Form/StreamerForm";
import { getStreamers, voteStreamer } from "../../Api";
import { useEffect, useState } from "react";
import { Wrap } from "./StreamerList.styled";
import { Header } from "../../components/Header/Header";

export const StreamerList = () => {
  const [streamerList, setStreamerList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getStreamers();
      const modifiedUsers = response.map((user) => ({ ...user, isUpvoted: false, isDownVoted : false }));
      setStreamerList(modifiedUsers);
    };
    fetchData();
  }, []);

  const handleVote = async (id, vote) => {
    await voteStreamer(id, vote);
    setStreamerList((prevUsers) =>
      prevUsers.map((user) => {
        if (user._id === id) {
          return {
            ...user,
            [vote]: user[vote] + 1,
            isUpvoted: vote === "upvote" ? true : user.isUpvoted,
            isDownVoted: vote === "downvote" ? true : user.isDownVoted,
          };
        }
        return user;
      })
    );
  };
  
  

  return (
    <>
      <Header />
      <StreamerForm setStreamerList={setStreamerList} />
      <Wrap>
        {streamerList.map((user) => {
          return (
            <StreamerCard
              key={user._id}
              user={user}
              onUpvote={() => handleVote(user._id, "upvote")}
              onDownvote={() => handleVote(user._id, "downvote")}
            />
          );
        })}
      </Wrap>
    </>
  );
};