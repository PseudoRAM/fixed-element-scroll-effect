import * as React from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

interface Props {
  height: number;
  children: JSX.Element[];
  scrollOffset?: number;
}

const ScrollLayout = ({ height, children, scrollOffset = 0 }: Props) => {
  const body = React.useRef<HTMLDivElement>(null);

  useScrollPosition(({ currPos }) => {
    let foundDiv = false;
    let prevDiv = null;
    const elements = body.current.children;
    Array.from(elements)
      .reverse()
      .forEach((item: HTMLDivElement, i) => {
        if (
          !foundDiv &&
          parseInt(item.getAttribute("top"), 10) + currPos.y - scrollOffset <= 0
        ) {
          const offset = prevDiv
            ? parseInt(prevDiv.getAttribute("top"), 10) +
              currPos.y -
              item.scrollHeight -
              scrollOffset
            : scrollOffset;

          item.style.position = "fixed";
          item.style.top = `${
            offset < 0 ? offset + scrollOffset : scrollOffset
          }px`;

          foundDiv = true;
        } else if (
          foundDiv &&
          parseInt(item.getAttribute("top"), 10) + currPos.y - scrollOffset <= 0
        ) {
          item.style.position = "absolute";
          item.style.top = `${
            i < elements.length
              ? parseInt(
                  elements[elements.length - i].getAttribute("top"),
                  10
                ) - item.scrollHeight
              : item.getAttribute("top")
          }px`;
          prevDiv = item;
        } else {
          item.style.position = "absolute";
          item.style.top = `${item.getAttribute("top")}px`;
          prevDiv = item;
        }
      });
  }, []);

  React.useEffect(() => {
    Array.from(body.current.children)
      .reverse()
      .forEach((item: HTMLDivElement) =>
        item.setAttribute("top", `${item.offsetTop}`)
      );
  }, []);

  return (
    <Container ref={body} style={{ height }}>
      {children}
    </Container>
  );
};

export default ScrollLayout;
