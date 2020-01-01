import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import ScrollLayout from "./components/ScrollLayout";

const rootElement = document.getElementById("root");

interface ElemProps {
  top: number;
  color: string;
}

const Elem = styled.div<ElemProps>`
  background: ${props => props.color};
  position: absolute;
  width: 150px;
  height: 150px;
  top: ${props => props.top}px;
  box-shadow: inset 0px 0px 0px 15px rgba(0, 0, 0, 0.8);
`;

const Body = styled.div`
  margin: -8px;
  background: #1c2022;
  display: flex;
  justify-content: space-around;
  align-items: start;

  & > div:last-child {
    width: 150px;
  }
`;

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin: 50px 0;
`;

const Info = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  width: 400px;
  line-height: 1.5;
  margin-bottom: 50px;
`;

const TestLayout = () => (
  <ScrollLayout height={5000} scrollOffset={100}>
    <Elem color="green" top={200} />
    <Elem color="blue" top={800} />
    <Elem color="purple" top={1600} />
    <Elem color="orange" top={3200} />
  </ScrollLayout>
);

const LoremIpsum = () => (
  <Info>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus
    condimentum scelerisque. Fusce magna mi, tempor quis lacinia nec, interdum
    at augue. Morbi convallis sapien nunc, vitae luctus augue viverra vitae. Nam
    pellentesque non quam ut cursus. Duis semper nec sem eget pretium.
    Vestibulum pellentesque sed mauris sit amet sodales. Phasellus varius urna
    in mi tempus scelerisque nec ac odio. Aenean ut viverra ex. Sed porttitor
    pellentesque lacus, blandit varius risus interdum nec. In aliquet libero
    lacus, non vestibulum nibh volutpat et. Ut efficitur mi sapien. Curabitur
    vehicula semper felis nec rhoncus.
  </Info>
);

render(
  <Body>
    <div>
      <Title>Fixed Scrolling Effect</Title>
      <LoremIpsum />
      <LoremIpsum />
      <LoremIpsum />
      <LoremIpsum />
      <LoremIpsum />
      <LoremIpsum />
      <LoremIpsum />
    </div>
    <TestLayout />
  </Body>,
  rootElement
);
