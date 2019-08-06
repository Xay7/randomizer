import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "components/UI/Search/SearchBar";
import { data } from "utils/itemsList";
import Item from "components/Item/Item";

const Container = styled.main`
  margin: 0 auto;
  margin-top: 48px;
  height: 300px;
  width: 960px;
  background-color: white;
`;

const ItemsContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Main: React.FC = () => {
  const [items, setItems] = useState<any>(data);
  let itemsList: Array<any> = [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let updatedItems: Array<any> = [];
    for (const el in data) {
      updatedItems = [
        ...updatedItems,
        data[el].filter((el: any) => {
          return el.name.toLowerCase().includes(e.target.value.toLowerCase());
        })
      ];
    }
    setItems(updatedItems);
  };

  for (const el in items) {
    itemsList = [
      ...itemsList,
      items[el].map((el: any) => {
        return <Item name={el.name} icon={el.icon} />;
      })
    ];
  }

  return (
    <Container>
      <SearchBar onChange={handleChange} />
      <ItemsContainer>{itemsList}</ItemsContainer>
    </Container>
  );
};

export default Main;
