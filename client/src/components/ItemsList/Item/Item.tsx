import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 130px;
  height: 130px;
  background-color: transparent;
  border: 1px solid hsla(255, 255, 255, 1);
  border-radius: 5px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  &:hover {
    cursor: pointer;
  }
`;

const ItemName = styled.h3`
  margin: 0;
  color: ${props => props.theme.main};
  font-size: 20px;
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.main};
  font-size: 48px;
  margin-bottom: 7px;
`;

interface Props {
  name: string;
  icon: string;
}

const Element: React.FC<Props> = props => {
  return (
    <Link to={props.name.toLocaleLowerCase()} style={{ textDecoration: "none" }}>
      <Container>
        <Icon icon={props.icon as IconName} />
        <ItemName>{props.name}</ItemName>
      </Container>
    </Link>
  );
};

export default Element;
