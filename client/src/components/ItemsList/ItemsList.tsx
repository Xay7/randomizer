import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "components/UI/Search/SearchBar";
import { data } from "utils/itemsList";
import Item from "components/ItemsList/Item/Item";

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
    console.log(process.env.REACT_APP_API_KEY);
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
    <React.Fragment>
      <SearchBar onChange={handleChange} />
      <ItemsContainer>{itemsList}</ItemsContainer>
    </React.Fragment>
  );
};

export default Main;
