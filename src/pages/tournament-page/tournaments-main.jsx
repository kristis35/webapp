
import TournamentCard from './tournament-page';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
const AppContainer = styled.div`
  height: calc(100% - ${(props) => props.topBar?.offsetHeight || 0}px);
  background-color: ${(props) => props.theme.colors.StrongGray};
  background-size: cover;
  overflow: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
`;

const TournamentM = () => {
  const location = useLocation();
  const { tournament } = location.state;
  console.log(tournament);
  return (
    <AppContainer>
      {tournament && <TournamentCard {...tournament} />}
    </AppContainer>
  );
}

export default TournamentM;