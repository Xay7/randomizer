import React, { useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  width: max-content;
  margin: 0 auto;
  padding: 50px 0;
`;

const Input = styled.input`
  font-size: 14px;
  box-sizing: border-box;
  height: 48px;
  width: 240px;
  border: 1px solid #d8d8d8;
  border-left: none;
  border-radius: 0 25px 25px 0;
  outline: none;
  caret-color: hsla(255, 255, 255, 0.88);
  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  ::-webkit-search-cancel-button:after {
    content: "X";
    font-style: italic;
    color: red;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 48px;
  padding: 5px 20px;
  border: 1px solid #d8d8d8;
  border-right: none;
  border-radius: 25px 0 0 25px;
  cursor: pointer;
`;

interface Props {
  onChange: Function;
}

const Search: React.FC<Props> = props => {
  const input = useRef<HTMLInputElement | null>(null);

  return (
    <Container>
      <IconContainer onClick={() => input !== null && input.current!.focus()}>
        <FontAwesomeIcon icon="search" color="#d8d8d8" size="1x" />
      </IconContainer>
      <Input
        type="text"
        onChange={e => props.onChange(e)}
        placeholder="Search..."
        onFocus={e => (e.target.placeholder = "")}
        onBlur={e => (e.target.placeholder = "Search...")}
        autoFocus
        ref={input}
      />
    </Container>
  );
};

export default Search;
