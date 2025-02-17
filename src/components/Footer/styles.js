import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 8vh;

  nav {
    display: flex;
    justify-content: center;
    padding: 10px;
  }

  p {
    color: #103751;
    display: flex;
    padding: 5px;
  }

  a {
    text-decoration: none;
    color: #103751;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      color: #ffc365; 

      p {
        color: #ffc365; 
      }
    }
  }

  p:nth-last-child(2) {
    font-size: 11px;
  }

  a:nth-last-child(1) {
    font-size: 11px;
  }
`