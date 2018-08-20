import React from "react";
import styled from "styled-components";
import SocialButton from "./common/SocialIcon";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "../styles/aboutStyle.css";

const AboutWrap = styled.div`
  text-align: center;
  padding: 50pt 0;
`;

const About = () => {
  return (
    <ReactCSSTransitionGroup
      transitionName="aboutTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <AboutWrap>
        <img
          src={require("../image/about/about1.png")}
          alt=""
          width="100"
          height="100"
        />
        <h2>Haneul Lee</h2> <br />
        <h3>WORK EXPERIENCE</h3>
        <p>2013.12 ~ present</p>
        <p>Hancom Inc. in South Korea </p>
        <p>Staff Researcher, WebWrite Team</p>
        <p>Currently work as a Front-end Developer at Hancom corp. </p>
        <p>
          Especially working on ‘WebWrite’ which is a web office such as Google
          Docs.
        </p>
        <p>
          Primarily developed Shape, Image effect part by using Javascript,
          HTML5, CSS3.
        </p>
        <p>
          <a href="https://www.netffice24.com">Netffice24</a>
        </p>
        <p>
          <a href="http://www.hancom.com/group.eng_main.main.do">
            Hancom corp.
          </a>
        </p>
        <br />
        <h3>EDUCATION</h3>
        <p>2009.03 ~ 2014.02</p>
        <p>Kongju National University</p>
        <p>Bachelor of Science in Radio Science Engineering</p>
        <br />
        <h3>SKILLS</h3>
        <p>Java / Javascript / HTML / CSS</p>
        <p>jQuery / Underscore / Backbone / RequireJS / Qunit / React</p>
        <p>Processing / Arduino</p>
        <p>Photoshop / Illustrator / After Effect</p>
        <br />
        <SocialButton url="mailto:lovesky4294@gmail.com?Subject=Hello" />
        <SocialButton url="https://linkedin.com/in/hnlee" />
        <SocialButton url="https://vimeo.com/haneullee" />
        <SocialButton url="https://kr.pinterest.com/lovesky4294/" />
        {/* <SocialButton url="https://facebook.com/haneul.lee.79677" /> */}
        <p>
          <br />
          <a href="https://docs.google.com/document/d/1FqCCSikpgLuGdrnUr5UdCa21grAn7l-YRJZ_uj3Vzwc/edit?usp=sharing">
            Resume
          </a>
        </p>
      </AboutWrap>
    </ReactCSSTransitionGroup>
  );
};

export default About;
