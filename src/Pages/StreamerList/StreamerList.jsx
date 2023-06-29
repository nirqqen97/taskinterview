
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
      const modifiedUsers = response.map((user) => ({ ...user, isUpvoted: false, isDownVoted: false }));
      setStreamerList(modifiedUsers);
    };
    fetchData();
  }, []);

  const handleVote = async (updatedUser) => {
    const updatedStreamers = streamerList.map((user) =>
      user._id === updatedUser._id ? updatedUser : user
    );
    setStreamerList(updatedStreamers);
  };

  return (
    <>
      <Header />
      <StreamerForm setStreamerList={setStreamerList} />
      <Wrap>
        {streamerList.map((user) => (
          <StreamerCard
            key={user._id}
            user={user}
            onVote={handleVote}
          />
        ))}
      </Wrap>
    </>
  );
};