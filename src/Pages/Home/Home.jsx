import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/streamers");
  }, [navigate]);

  return <div>Redirecting to Another Page...</div>;
};
