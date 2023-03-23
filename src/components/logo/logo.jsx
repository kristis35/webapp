import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo/logo.png';

const Container = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Image = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Logo = (props) => {
  return (
    <Container {...props}>
      <Image
        {...props}
        src={logo}
      />
    </Container>
  );
};

export default Logo;
