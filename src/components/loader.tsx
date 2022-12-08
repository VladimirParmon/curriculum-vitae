import styled from "styled-components";

const LoaderContainer = styled.div<{ position: "relative" | "absolute" }>`
  position: ${(props) => props.position};
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Widget = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid ${(props) => props.theme.color};
  border-bottom: 5px solid ${(props) => props.theme.accent};
  animation-name: spin;
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;

export function Loader(position: "relative" | "absolute") {
  return (
    <LoaderContainer position={position}>
      <Widget></Widget>
    </LoaderContainer>
  );
}
