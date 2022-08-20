import styled from "styled-components";

export const UserWrapper = styled.article`
  display: flex;
  justify-content: center;
`;

export const UserTable = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr;
`;

export const UserFoto = styled.div`
  width: 10rem;
  height: 10rem;
  background: black;
`;

export const UserInfo = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
`;

export const UserInfoStr = styled.div`

`;