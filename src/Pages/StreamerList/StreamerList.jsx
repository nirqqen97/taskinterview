// StreamerList.js

import { StreamerCard } from "../../components/Card/StreamerCard";
import { StreamerForm } from "../../components/Form/StreamerForm";
import { getStreamers, voteStreamer } from "../../Api";
import { useEffect, useState } from "react";
import { Wrap } from "./StreamerList.styled";

export const StreamerList = () => {
  const [streamerList, setStreamerList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getStreamers();
      setStreamerList(response);
    };
    fetchData();
  }, []);

  const handleVote = async (id, vote) => {
    await voteStreamer(id, vote);
    const updatedStreamers = [...streamerList];
    const index = updatedStreamers.findIndex((user) => user._id === id);
    if (index !== -1) {
      updatedStreamers[index] = { ...updatedStreamers[index], [vote]: updatedStreamers[index][vote] + 1 };
      setStreamerList(updatedStreamers);
    }
  };

  return (
    <>
      <StreamerForm />
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
