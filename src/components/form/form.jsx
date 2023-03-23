import React from 'react';
import { useNavigate } from 'react-router';
import styled, { useTheme } from 'styled-components';
import { ContainedButton, OutlinedButton } from '../button';
import { ArrowRightIcon } from '../icons';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
`;

const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  background: ${(props) => `${props.theme.colors.Black}E5`};
  border: 3px solid ${(props) => props.theme.colors.BlazeBlue};
  padding: 20px;
  border-radius: 40px;
`;

const Title = styled.h1`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.Default};
  color: ${(props) => props.theme.colors.White};
  margin: auto;
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  font-family: ${(props) => props.theme.fonts.Default};
  color: ${(props) => props.theme.colors.Red};
  padding-left: 4px;
`;

const Form = (props) => {
  const navigate = useNavigate();
  const {
    title,
    onSubmit,
    loading,
    errorMessage,
    showSubmitButton = true,
    submitButtonTitle,
    submitButtonColor,
    showCancelButton = true,
    submitCancelTitle,
    submitCancelColor,
    children
  } = props;
  const theme = useTheme();
  return (
    <FormContainer>
      <FormElement onSubmit={onSubmit}>
        <Title>{title}</Title>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        {children}
        <ActionButtonsContainer>
          {showSubmitButton && (
            <ContainedButton
              size='xs'
              value={submitButtonTitle || 'Submit'}
              color={submitButtonColor || theme.colors.PurpleBlue}
              icon={
                <ArrowRightIcon
                  color={theme.colors.Black}
                  height={24}
                  width={24}
                />
              }
              iconPossition='right'
              loading={loading}
              type='submit'
            />
          )}
          {showCancelButton && (
            <OutlinedButton
              size='xs'
              value={submitCancelTitle || 'Cancel'}
              color={submitCancelColor || theme.colors.PurpleBlue}
              onClick={() => navigate(-1)}
            />
          )}
        </ActionButtonsContainer>
      </FormElement>
    </FormContainer>
  );
};

export default Form;
