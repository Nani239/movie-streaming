import React from "react";
import Movies from "../../components/Movies/Movies";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import response from "../../response.json";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Movies response={response} />
    </div>
  );
};

export default Home;
