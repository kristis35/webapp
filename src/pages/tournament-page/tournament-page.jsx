import styled from 'styled-components';
import React, { useEffect, useCallback, useContext } from 'react';
import { DataContext, useSave, useFind } from '../../utils';
import { useParams, useNavigate } from 'react-router-dom';
const CardContainer = styled.div`
  width: 600px;
  background: ${(props) => `${props.theme.colors.Black}E5`};
  border: 3px solid ${(props) => props.theme.colors.BlazeBlue};
  border-radius: 10px;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Section = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const Subsection = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: ${(props) => props.theme.colors.White};
  margin-bottom: 5px;
`;

const Date = styled.p`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.Default};
  color: ${(props) => props.theme.colors.White};
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.Default};
  color: ${(props) => props.theme.colors.White};
  margin-bottom: 5px;
`;

const Points = styled.p`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.Default};
  color: ${(props) => props.theme.colors.White};
  margin-bottom: 5px;
`;

const Difficulty = styled.p`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.Default};
  color: ${(props) => props.theme.colors.White};
  margin-bottom: 5px;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.PurpleBlue};
  color: ${(props) => props.theme.colors.White};
  font-family: ${(props) => props.theme.fonts.Default};
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
`;

const TournamentCard = ({
  name,
  startDate,
  endDate,
  description,
  firstPlacePoints,
  secondPlacePoints,
  thirdPlacePoints,
  difficulty,
  status
}) => {
  const { id } = useParams();
  const dataContext = useContext(DataContext);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const {
    response: registeredResponse,
    error: registeredError,
    find: checkRegistration
  } = useFind(`${dataContext.API}/tournament/isRegistered/${id}`);

  const {
    response: registerResponse,
    error: registerError,
    save: register
  } = useSave(`${dataContext.API}/tournament/register/{id}`);

  useEffect(() => {
    if (registerError) {
      console.error(registerError);
    }
    if (registeredError) {
      console.error(registeredError);
    }
  }, [registerError]);

  useEffect(() => {
    checkRegistration(
      {
        headers: {
          Authorization: token
        }
      },
      [
        {
          name: 'id',
          value: id
        }
      ]
    );
  }, [checkRegistration, token, id]);

  const handleRegister = useCallback(() => {
    if (id) {
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
      register({}, config, additionalURLParams);
    }
  }, [register, token]);

  useEffect(() => {
    if (registerResponse?.status === 200) {
      navigate(0);
    }
  }, [registerResponse]);

  const handleSolveTask = () => {
    navigate(`/solve_task/${id}`);
  };

  return (
    <CardContainer>
      <Title>{name}</Title>
      <Section>
        <Subsection>
          <Date>Start Date: {startDate}</Date>
          <Date>End Date: {endDate}</Date>
          <Difficulty>Difficulty: {difficulty}</Difficulty>
        </Subsection>
        <Subsection>
          <Points>First Place: {firstPlacePoints} points</Points>
          <Points>Second Place: {secondPlacePoints} points</Points>
          <Points>Third Place: {thirdPlacePoints} points</Points>
        </Subsection>
      </Section>
      <Description>{description}</Description>
      {status === 'Registration' && !registeredResponse?.data && (
        <Button onClick={handleRegister}>Register</Button>
      )}
      {status === 'Started' && registeredResponse?.data && (
        <Button onClick={handleSolveTask}>Solve Task</Button>
      )}
    </CardContainer>
  );
};

export default TournamentCard;
