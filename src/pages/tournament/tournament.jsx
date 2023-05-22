import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import TournamentCard from './tournament-card';
import { useContext, useEffect, useState } from 'react';
import { DataContext, useFind } from '../../utils';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.StrongGray};
  background-size: cover;
  overflow: auto;
  height: 92.7%;
`;

const Tournament = (props) => {
  const dataContext = useContext(DataContext);
  const token = localStorage.getItem('token');
  const { id } = useParams();

  const [tournament, setTournament] = useState(null);

  const { response, loading, find } = useFind(
    `${dataContext.API}/tournament/get/{id}`
  );

  const getTournament = () => {
    if (id && id !== 'new') {
      const config = {
        headers: {
          Authorization: token
        }
      };
      const additionalURLParams = [
        {
          name: 'id',
          value: id
        }
      ];
      find(config, additionalURLParams);
    }
  };

  useEffect(() => {
    getTournament();
  }, [id]);

  useEffect(() => {
    if (response?.data) {
      setTournament(response.data);
    }
  }, [response]);

  return (
    <Container>
      <TournamentCard
        snackbarRef={props.snackbarRef}
        setSnackbar={props.setSnackbar}
        getTournament={getTournament}
        tournament={tournament}
        loading={loading}
      />
    </Container>
  );
};

export default Tournament;
