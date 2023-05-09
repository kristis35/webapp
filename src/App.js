import { useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationBar, Snackbar, Theme } from './components';
import {
  Home,
  Login,
  Registration,
  Profile,
  UserInteface,
  Contact,
  EditProfile,
  CreateTask,
  SolveTask,
  Tournament
} from './pages';
import { DataContext } from './utils';

const App = () => {
  const dataContext = {
    API: 'http://localhost:8080'
  };

  const snackbarRef = useRef(null);
  const [snackbar, setSnackbar] = useState({});

  return (
    <DataContext.Provider value={dataContext}>
      <Theme>
        <Router>
          <NavigationBar
            snackbarRef={snackbarRef}
            setSnackbar={setSnackbar}
          />
          <Routes>
            <Route path='/'>
              <Route
                index
                element={<Home />}
              />
              <Route
                path='login'
                element={
                  <Login
                    snackbarRef={snackbarRef}
                    setSnackbar={setSnackbar}
                  />
                }
              />
              <Route
                path='register'
                element={
                  <Registration
                    snackbarRef={snackbarRef}
                    setSnackbar={setSnackbar}
                  />
                }
              />
              <Route
                path='ui'
                element={<UserInteface />}
              />
              <Route
                path='tournaments'
                element={<Tournament />}
              />
              <Route
                path='profile'
                element={<Profile />}
              />
              <Route
                path='contact_us'
                element={<Contact />}
              />
              <Route
                path='profile/edit'
                element={<EditProfile />}
              />
              <Route
                path='create_task'
                element={
                  <CreateTask
                    snackbarRef={snackbarRef}
                    setSnackbar={setSnackbar}
                  />
                }
              />
              <Route
                path='solve_task/:id'
                element={
                  <SolveTask
                    snackbarRef={snackbarRef}
                    setSnackbar={setSnackbar}
                  />
                }
              />
            </Route>
          </Routes>
          <Snackbar
            ref={snackbarRef}
            snackbar={snackbar}
          />
        </Router>
      </Theme>
    </DataContext.Provider>
  );
};

export default App;
