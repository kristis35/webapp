import React from 'react';
import styled from 'styled-components';



const BigText = styled.h1`
    text-align: center;
    font-family: ${(props) => props.theme.fonts.Default};
    color: ${(props) => props.theme.colors.White};
    margin: auto;
`;


const SmallText = styled.div`
    text-align: center;
    font-size: 1.2rem;
    font-family: ${(props) => props.theme.fonts.Default};
    color: ${(props) => props.theme.colors.White};
    margin: auto;
`;

const Background = styled.div`
  background-image: url('https://images4.alphacoders.com/835/83516.jpg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  width: 2400px;
  height: 1080px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 10px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-right: 10px;
`;

const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  background: ${(props) => `${props.theme.colors.Black}E5`};
  border: 3px solid ${(props) => props.theme.colors.BlazeBlue};
  padding: 20px;
  align-items: center;
  border-radius: 40px;
  margin-right: 300px;
`;

const Table = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type:none;
  margin: 0, 0,0,50px
`;

const Row = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

function Contact() {
  return (
    <Background>
        <FormContainer>
            <FormElement>
            <BigText>Contact Us</BigText>
            <SmallText>
            <p>If you have any questions or concerns, you can reach us by:</p>
            <Table>
                <Row>Email: contact@company.com</Row>
                <li>Phone: 555-555-5555</li>
                <li>Address: 123 Main St, Anytown USA</li>
            </Table>
            </SmallText>
            </FormElement>
        </FormContainer>
    </Background>
  );
}

export default Contact;