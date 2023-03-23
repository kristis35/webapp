import React from 'react';
import styled from 'styled-components';
import homePhoto from '../../assets/backgrounds/home-page.png';

const Container = styled.div`
  height: calc(100% - ${(props) => props.topBar?.offsetHeight || 0}px);
  background-image: url(${homePhoto});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Home = () => {
  const topBar = document.getElementById('topBar');
  return <Container topBar={topBar} />;
};

export default Home;
