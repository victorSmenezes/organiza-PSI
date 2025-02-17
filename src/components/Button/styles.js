import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: 65%;
  height: 65px;
  padding: 15px;
  border-radius: 45px;
  background-color: #ffc365;
  border: none;
  cursor: pointer;
  font-size: 22px;
  font-weight: 500;
  margin: 25px auto;

  &:hover {
    opacity: .9;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: #FAF9EC;
    text-decoration: none;

    &:hover {
    color: #103751;
  }
  }

  @media screen and (max-width: 768px) {
    width: 85%;
    font-size: 18px;
    padding: 10px;
  }
`