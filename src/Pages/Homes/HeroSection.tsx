import React from "react";
import styled from "styled-components";

const Section = styled.section``;
const ContentBox = styled.div``;
const Content = styled.div``;
const Title = styled.p``;
export default function HeroSection() {
  return (
    <Section id="heroSection" className="">
      <ContentBox className="">
        <Content className="hero">
          <Title>Hey,I'm John</Title>
          <h1 className="hero-title">
            <span className="title-color">Full Stack</span>{""}
            <br />
            Developer
          </h1>
          <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <br/> dolorum, quas. Amet solita assumenda cum?
          </p>
        </Content>
        <button>Get In Touch</button>
      </ContentBox>
      <div className="section-img">
        <img src="./img/avatar.png" alt="Hero Section" style={{width: "60%"}}></img>
      </div>
    </Section>
  );
}
