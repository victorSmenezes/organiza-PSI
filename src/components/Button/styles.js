import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: 65%;
  height: 65px;
  padding: 15px;
  border-radius: 45px;
  background-color: #C9B9A0;
  border: none;
  cursor: pointer;
  font-size: 22px;

  &:hover {
    opacity: .8;
  }

  a {
    color: #FAF9EC;
    text-overflow: none;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    width: 85%;
    font-size: 18px;
  }
`