import React from 'react';
import styled from 'styled-components';
import homePhoto from '../../assets/backgrounds/home-page.png';

const Container = styled.div`
  height: calc(100% - ${(props) => props.topBar?.offsetHeight || 0}px);
  background-image: url(${homePhoto});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: auto;
`;

const Home = () => {
  const topBar = document.getElementById('topBar');
  return <Container topBar={topBar} />;
};

export default Home;
