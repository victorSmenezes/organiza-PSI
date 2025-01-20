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
  flex-direction: column;
  justify-content: center;
`

export const TextWhatIs = styled(Text)`
  border: 3px solid #fec64b;
  padding: 25px;
  border-radius: 8px;
  margin: 60px auto 35px auto;

  span{
    color: #877d6c;
    font-weight: 600;
    border: none;
  }
`

export const ContainerWhatYouFound = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 85%;
`

export const 