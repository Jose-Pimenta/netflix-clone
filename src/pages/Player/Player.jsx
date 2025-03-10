import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";
import { TMDB_Access_Key } from "../../config";

const Player = (props) => {
  const state = props.location;
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjc0Y2RhYWY2YWZiZjBjNmE4Y2U5MmQ3YTdiNDVhYyIsIm5iZiI6MTc0MDY5MTg0MC4wNTc5OTk4LCJzdWIiOiI2N2MwZDk4MGMxNTNlY2UyZTJhMjU1NmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ExpWYtbtJJuo8AvilGLGMnExZsozQz_nUqhxtuEZr1Y",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
    console.log(props);
  }, []);

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt=""
        onClick={() => {
          navigate(-2);
        }}
      />
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{state}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
