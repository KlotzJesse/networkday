import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";
import Example from "../components/TestHero.client";
import Header from "./../components/Header.client";

const Liveshow = () => (
  <ReactFullpage
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="bg-red-500 section">
            <Example />
          </div>
          <div className="section">
            <Header />
            <p>Section 2</p>
          </div>
          <div className="section">
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

Liveshow.propTypes = {};

export default Liveshow;
