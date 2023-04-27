import React, { useState, useCallback, useContext, useEffect } from 'react';
import styled, { useTheme } from 'styled-components';
import { useParams } from 'react-router-dom';
import CodeEditor from '../../components/code-editor/code-editor';
import { DataContext, useFind, useSave } from '../../utils';
import { ContainedButton, TextAreaInput } from '../../components';

const Container = styled.div`
  height: calc(100% - ${(props) => props.topBar?.offsetHeight || 0}px);
  background-color: ${(props) => props.theme.colors.StrongGray};
  background-size: cover;
  overflow: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  background: ${(props) => `${props.theme.colors.Black}E5`};
  border: 3px solid ${(props) => props.theme.colors.BlazeBlue};
  border-radius: 40px;
  width: 90%;
  height: 80%;
`;

const TitleContainer = styled.div`
  hight: 50px;
`;

const Title = styled.h1`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.Default};
  color: ${(props) => props.theme.colors.White};
  margin: auto;
`;

const DescriptionContainer = styled.div`
  width: 80%;
`;

const EditorContainer = styled.div`
  width: 80%;
`;

const FooterContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SolveTask = () => {
  const topBar = document.getElementById('topBar');
  const token = localStorage.getItem('token');
  const dataContext = useContext(DataContext);
  const theme = useTheme();

  const { id } = useParams();

  const [code, setCode] = useState('');
  const [task, setTask] = useState({});
  const [footerText, setFooterText] = useState('');

  const {
    response: getCodeResponse,
    loading: getcodeloading,
    find: getCode
  } = useFind(`${dataContext.API}/task/getCode/{id}`);
  const {
    response: getTaskResponse,
    loading: getTaskloading,
    find: getTask
  } = useFind(`${dataContext.API}/task/getTask/{id}`);
  const {
    response: saveResponse,
    loading: saveloading,
    error: saveError,
    save
  } = useSave(`${dataContext.API}/task/submitSolution/{id}`);

  useEffect(() => {
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
      getCode(config, additionalURLParams);
    }
  }, [token, id]);

  useEffect(() => {
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
      getTask(config, additionalURLParams);
    }
  }, [token, id]);

  useEffect(() => {
    if (getCodeResponse?.data) {
      setCode(getCodeResponse.data);
      setFooterText('');
    }
  }, [getCodeResponse]);

  useEffect(() => {
    if (getTaskResponse?.data) {
      setTask(getTaskResponse.data);
      setFooterText('');
    }
  }, [getTaskResponse]);

  useEffect(() => {
    if (saveError?.response?.status === 406) {
      setFooterText(saveError.response.data?.message || '');
    } else {
      setFooterText('');
    }
  }, [saveError]);

  const onChange = useCallback((value) => {
    setCode(value);
  }, []);

  const handleSubmit = useCallback(() => {
    if (id && code) {
      const request = code;
      const config = {
        headers: {
          'Authorization': token,
          'Content-Type': 'text/plain'
        }
      };
      const additionalURLParams = [
        {
          name: 'id',
          value: id
        }
      ];
      save(request, config, additionalURLParams);
      setFooterText('');
    }
  }, [token, id, code]);

  useEffect(() => {
    if (saveResponse?.data) {
      if (saveResponse.data.passed) {
        setFooterText(
          `Congratulations! All tests passed. You recieve ${task.points} points.`
        );
      } else {
        setFooterText(
          `${saveResponse.data.passedTestCases} out of ${saveResponse.data.totalTestCases} test cases passed.`
        );
      }
    }
  }, [saveResponse]);

  return (
    <Container topBar={topBar}>
      <PageContainer topBar={topBar}>
        <TitleContainer>
          <Title>{task.title || 'Title missing'}</Title>
        </TitleContainer>
        <DescriptionContainer>
          <TextAreaInput
            height='64px'
            value={
              getTaskloading
                ? 'Loading...'
                : task.description || 'Description missing'
            }
            disabled
          />
        </DescriptionContainer>
        <EditorContainer>
          <CodeEditor
            value={getcodeloading ? 'Loading...' : code}
            onChange={onChange}
            height='40vh'
          />
        </EditorContainer>
        <FooterContainer>
          <ContainedButton
            value='Submit'
            size='md'
            color={theme.colors.PurpleBlue}
            onClick={handleSubmit}
            loading={saveloading}
          />
          <DescriptionContainer>
            <TextAreaInput
              height='10vh'
              value={saveloading ? 'Solving...' : footerText}
              disabled
            />
          </DescriptionContainer>
        </FooterContainer>
      </PageContainer>
    </Container>
  );
};

export default SolveTask;
