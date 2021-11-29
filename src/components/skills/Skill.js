import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { createHashHistory } from "history";

export default function Skill(props) {
  const [scrolling, setScrolling] = useState("paused");
  let History = createHashHistory();

  useEffect(() => {
    let func = (e) => {
      if ((window.pageYOffset > 0) & (window.pageYOffset < 3000)) {
        setScrolling("running");
      }
    };
    if (History.location.pathname == "/") {
      window.addEventListener("scroll", (e) => func(e));
    }
    return () => {
      window.removeEventListener("scroll", func);
    };
  }, []);

  let getChangeWidth = (props) => keyframes`
    0% { width:0 }
    100% { width: ${props.value}}
  `;
  let getChangeLeft = (props) => keyframes`
    0% { left:0,visibility:hidden}
    100% { left: ${props.value},visibility:visible}
  `;

  let Div = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(93, 9, 121, 1);
    width: ${props.value};
    height: 100%;
    border-radius: var(--radius);
    animation: ${(props) => getChangeWidth(props)} 3s ease;
    animation-play-state: ${scrolling};
  `;

  let P = styled.p`
    position: absolute;
    top: -2rem;
    left: ${props.value};
    transform: translateX(-50%);
    animation: ${(props) => getChangeLeft(props)} 3s ease;
    animation-play-state: ${scrolling};
  `;

  return (
    <div className="skill">
      <p>{props.lang}</p>
      <div className="skill-container">
        <Div {...props}></Div>
        <P {...props}>{props.value}</P>
      </div>
    </div>
  );
}
