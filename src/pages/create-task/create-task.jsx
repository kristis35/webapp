import React, { useContext, useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { Form, Input } from '../../components';
import profilePhoto from '../../assets/backgrounds/profile-page.png';
import { DataContext, useSave } from '../../utils';

const Container = styled.div`
  height: calc(100% - ${(props) => props.topBar?.offsetHeight || 0}px);
  background-image: url(${profilePhoto});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: auto;
`;

const GridContainer = styled.div`
    display: inline-grid;
    grid-template-columns: auto auto;
`

const Griditem = styled.div`
    font-size: 30px;
`

const DefaultTask = {
    title: {
        value: '',
        errorMessage: ''
    },
    description: {
        value: '',
        errorMessage: ''
    },
    points: {
        value: '',
        errorMessage: ''
    },
    methodName: {
        value: '',
        errorMessage: ''
    },
    methodArguments: {
        value: '',
        errorMessage: ''
    },
    methodArgumentTypes: {
        value: '',
        errorMessage: ''
    },
    returnType: {
        value: '',
        errorMessage: ''
    },
    in: {
        value: '',
        errorMessage: ''
    },
    out: {
        value: '',
        errorMessage: ''
    }
};

const CreateTask = (props) => {
    const dataContext = useContext(DataContext);
    const topBar = document.getElementById('topBar');
    const [task, setTask] = useState(DefaultTask);
    const theme = useTheme();
    const token = localStorage.getItem('token');
    const { response, loading, error, save, clearError } = useSave(
        `${dataContext.API}/task/create`
    );

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: {
                value: e.target.value,
                errorMessage: ''
            }
        });

        if (error) {
            clearError();
        }
    };

    useEffect(() => {
        if (response?.status === 201) {
            props.setSnackbar({
                color: theme.colors.DarkGreen,
                message: 'Task creation succesful'
            });
            props.snackbarRef.current.show();
            setTask(DefaultTask);
        }
    }, [response]);

    const checkForErrors = () => {
        let hasErrors = false;
        const validationErrors = [];

        if (task.title?.value === '') {
            validationErrors.push({
                propertyName: 'title',
                errorMessage: 'Required'
            });
        }

        if (task.description?.value === '') {
            validationErrors.push({
                propertyName: 'description',
                errorMessage: 'Required'
            });
        }

        if (task.methodName?.value === '') {
            validationErrors.push({
                propertyName: 'methodName',
                errorMessage: 'Required'
            });
        }

        if (task.methodArguments?.value === '') {
            validationErrors.push({
                propertyName: 'methodArguments',
                errorMessage: 'Required'
            });
        }

        if (task.methodArgumentTypes?.value === '') {
            validationErrors.push({
                propertyName: 'methodArgumentTypes',
                errorMessage: 'Required'
            });
        }

        if (task.returnType?.value === '') {
            validationErrors.push({
                propertyName: 'returnType',
                errorMessage: 'Required'
            });
        }

        if (task.out?.value === '') {
            validationErrors.push({
                propertyName: 'out',
                errorMessage: 'Required'
            });
        }

        if (task.in?.value === '') {
            validationErrors.push({
                propertyName: 'in',
                errorMessage: 'Required'
            });
        }

        if (task.points?.value === '') {
            validationErrors.push({
                propertyName: 'points',
                errorMessage: 'Required'
            });
        } else if (task.points?.value < 5 || task.points?.value > 100) {
            validationErrors.push({
                propertyName: 'points',
                errorMessage: 'Please enter a valid points between 5 and 100'
            });
        }

        if (validationErrors.length > 0) {
            hasErrors = true;
            mapErrors(validationErrors);
        }



        return hasErrors;
    };

    const mapErrors = (array) => {
        let updatedCredentials = { ...task };

        array.forEach((x) => {
            updatedCredentials = {
                ...updatedCredentials,
                [x.propertyName]: {
                    ...updatedCredentials[x.propertyName],
                    errorMessage: x.errorMessage
                }
            };
        });

        setTask(updatedCredentials);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const hasErrors = checkForErrors();

        if (!hasErrors) {
            const request = {
                title: task.title.value,
                description: task.description.value,
                points: task.points.value,
                methodName: task.methodName.value,
                methodArguments: task.methodArguments.value.split(','),
                methodArgumentTypes: task.methodArgumentTypes.value.split(','),
                returnType: task.returnType.value,
                inputOutput: [[task.in.value, task.out.value]]
            };
            const config = {
                headers: {
                    Authorization: token
                }
            };

            save(request, config);
        }

    };

    return (
        <Container topBar={topBar}>
            <Form
                title='Create task'
                onSubmit={handleSubmit}
                loading={loading}
            >
                <GridContainer>
                    <Griditem>
                        <Input
                            type='text'
                            label='Title'
                            name='title'
                            value={task.title?.value}
                            onChange={handleChange}
                            required
                            errorMessage={task.title?.errorMessage}
                        />
                    </Griditem>
                    <Griditem>
                        <Input
                            type='number'
                            label='Points'
                            name='points'
                            value={task.points?.value}
                            onChange={handleChange}
                            required
                            errorMessage={task.points?.errorMessage}
                        />
                    </Griditem>
                </GridContainer>
                <Input
                    type='text'
                    label='Method Name'
                    name='methodName'
                    required
                    value={task.methodName?.value}
                    onChange={handleChange}
                    errorMessage={task.methodName?.errorMessage}
                />
                <Input
                    type='text'
                    label='Description'
                    name='description'
                    value={task.description?.value}
                    onChange={handleChange}
                    required
                    errorMessage={task.description?.errorMessage}
                />
                <Input
                    type='text'
                    label='Method Arguments'
                    name='methodArguments'
                    required
                    value={task.methodArguments?.value}
                    onChange={handleChange}
                    errorMessage={task.methodArguments?.errorMessage}
                />
                <Input
                    type='text'
                    label='Method Arguments Type'
                    name='methodArgumentTypes'
                    required
                    value={task.methodArgumentTypes?.value}
                    onChange={handleChange}
                    errorMessage={task.methodArgumentTypes?.errorMessage}
                />
                <Input
                    type='text'
                    label='Return Type'
                    name='returnType'
                    required
                    value={task.returnType?.value}
                    onChange={handleChange}
                    errorMessage={task.returnType?.errorMessage}
                />
                <Input
                    type='text'
                    label='Input'
                    name='in'
                    required
                    value={task.in?.value}
                    onChange={handleChange}
                    errorMessage={task.in?.errorMessage}
                />
                <Input
                    type='text'
                    label='Output'
                    name='out'
                    required
                    value={task.out?.value}
                    onChange={handleChange}
                    errorMessage={task.out?.errorMessage}
                />
            </Form>
        </Container>
    );
};

export default CreateTask;
