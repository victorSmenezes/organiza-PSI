import styled from "styled-components";

export const MainSection = styled.section`
  background-color: ${props => props.$isZebraActive ? '#103751' : '#ffffff'};
  display: flex;
  align-items: center;
  border-radius: ${props => props.$isZebraActive ? '50px' : ''};
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
  align-items: center;

  h2 {
    font-size: 30px;
    width: 100%;
    color: #103751;
    border: 3px solid #ffc365;
    padding: 25px;
    border-radius: 45px;

    @media screen and (max-width: 768px) {
      font-size: 22px;
      width: 90%;
      padding: 20px;
      margin: auto;
  }
    
  }
`;

export const Title = styled.h1`
  font-size: ${props => props.size};
  color: ${props => props.$isZebraActive ? '#ffc365' : '#103751'};
  margin: 65px 0 0 0;
  width: 100%;
  text-align: ${props => props.$textOrientation};
  font-weight: 800;
    
    span {
      color: #ffc365;
    }

  @media screen and (max-width: 768px) {
    font-size: ${props => props.$sizeMobile || '24px'};
    margin: 65px auto 0 auto;
    width: 90%;
  }
`

export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;

  div {
    width: 650px;

    @media screen and (max-width: 1024px) {
     width: 100%;
     padding: 10px;
  }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const Text = styled.p`
  font-size: ${props => props.size};
  letter-spacing: 1.5px;
  color: ${props => props.$isZebraActive ? '#ffc365' : '#000000  '};
  margin: 15px 0;
  width: ${props => props.$widthText};
  text-align: ${props => props.$textOrientation};
  font-weight: 600;
  
  span {
    border-bottom: 2px solid #FAF9EC;
  }

  @media screen and (max-width: 768px) {
    font-size: ${props => props.$sizeMobile};
    width: 90%;
    margin:  15px auto;
  }
`

export const TextofCombo = styled(Text)`
  background: #103751;
  border-radius: 10px;
  color: #ffc365;
  padding: 10px;
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

    @media screen and (max-width: 1024px) {
      width: auto;
    }
  }

  img {
    width: auto;
    height: 500px;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 320px;
    }   
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
  
`

export const TextWhatIs = styled(Text)`
  border: 3px solid #ffc365;
  padding: 20px;
  border-radius: 45px;
  width: 80%;
  color: #FAF9EC;

  span{
    color: #ffc365;
    font-weight: 700;
    border: none;
  }

  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
`

export const ContainerWhatYouFound = styled.div`
  display: flex;
  margin: 25px auto;


  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    p {
      width: auto;
    }
  }

  div {
    width: 50%;
    padding: 18px;
    
    @media screen and (max-width: 768px) {
      width: auto;
      padding-top: 0;
  }
  }
`

export const TextWhatYouFound = styled(Text)`
  margin: ${props => props.$TextUp ? '10px 0 8px 0' : '0 0 10px 0'};
  color: ${props => props.$TextUp ? '#000000' : '#7298B0'};
  font-weight: ${props => props.$TextUp ? 700 : 600};

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
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

    @media screen and (max-width: 768px) {
     width: auto;
  }
  }

  img {
    width: 320px;
    height: 500px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.4);
    -moz-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.4);
    box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.4);

    @media screen and (max-width: 768px) {
      width: 280px;
      height: 440px;
    }
  }

  span{
    color: #FAF9EC;
    border-bottom:2px solid  #ffc365;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const ContainerForWhoIs = styled.div`
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

    @media screen and (max-width: 768px) {
      width: auto;
  }
  }

  img {
    width: 320px;
    height: 500px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.4);
    -moz-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.4);
    box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.4);

    @media screen and (max-width: 768px) {
      width: 280px;
      height: 420px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: auto;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    p {
      text-align: start;
      width: 95%;
    }
  }
`
export const ContainerContentButton = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px auto;
  padding: 10px;
  align-items: center;
`

export const TextContainerContent = styled(Text)`
  color: #FAF9EC;

  span{
    color: #ffc365;
    font-weight: 600;
    border: none;
  }

  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
`