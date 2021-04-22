import React, { useContext } from 'react';
import styled from 'styled-components';
import { ListItem } from '../Menu/ListItem';
import { Banner } from '../Menu/Banner';
import { Context } from '../Functions/context'

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
  margin-left: 380px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

export const Menu = () => {
  const {openItem: {setOpenItem}, dbMenu} = useContext(Context)
  return (
    <MenuStyled>
      <Banner />
      {dbMenu ? (
        <>
          <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem} />
          </SectionMenu>

          <SectionMenu>
            <h2>Закуски/Напитки</h2>
            <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem} />
          </SectionMenu>
        </>
      ) : (
        <div>Загрузка...</div>
      )}
    </MenuStyled>
  );
};
