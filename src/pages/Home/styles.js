import styled from "styled-components";

export const MainSection = styled.section`
  background-color: ${props => props.isZebraActive ? '#c8b99f' : '#FFFFFF'};
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  min-height: 40vh;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  padding: 5px;

  h2 {
    font-size: 34px;
    width: 100%;
    color: #c8b99f;
    border: 3px solid #fec64b;
    padding: 25px;
    border-radius: 10px;
  }
`;

export const Title = styled.h1`
  font-size: ${props => props.size};
  color: ${props => props.isZebraActive ? '#FFFFFF' : '#c8b99f'};
  margin: 65px 0 0 0;
  width: 100%;
  text-align: ${props => props.textOrientation};

  span{
    color: #877d6c;
  }
`

export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  margin-top: 50px;

  div {
    width: 650px;
  }
`

export const Text = styled.p`
  font-size: ${props => props.size};
  letter-spacing: 1.5px;
  color: ${props => props.isZebraActive ? '#FFFFFF' : '#877d6c'};
  margin: 15px 0;
  width: ${props => props.widthText};
  text-align: ${props => props.textOrientation};
  
  span {
    border-bottom: 2px solid #fec64b;
  }
`

export const ContainerWhatIs = styled.div`
  display: flex;
  margin: 35px auto auto auto;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
  }

  img {
    width: 380px;
    height: 500px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.4);
    -moz-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.4);
    box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.4);
  }
`

export const TextWhatIs = styled(Text)`
  border: 3px solid #fec64b;
  padding: 20px;
  border-radius: 8px;
  width: 80%;

  span{
    color: #877d6c;
    font-weight: 600;
    border: none;
  }
`

export const ContainerWhatYouFound = styled.div`
  display: flex;
  margin: 25px auto;

  div{
    width: 50%;
    padding: 18px;
  }
`

export const TextWhatYouFound = styled(Text)`
  margin: ${props => props.TextUp ? '10px 0 8px 0' : '0 0 10px 0'};
  font-weight: ${props => props.TextUp ? 600 : 400};
`

export const ContainerWhyYouNeedof = styled.div`
  display: flex;
  margin: 50px auto;
  align-items: center;

  div{
    width: 50%;
    padding: 10px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 300px;
    height: 480px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.4);
    -moz-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.4);
    box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.4);
  }

  span{
    border-bottom: 2px solid #fec64b;
  }
`