import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationBar, Theme } from './components';
import {
  Home,
  Login,
  Registration,
  Profile,
  UserInteface,
  Contact,
  EditProfile
} from './pages';
import { DataContext } from './utils';

const App = () => {
  const dataContext = {
    API: 'http://localhost:8080'
  };
  return (
    <DataContext.Provider value={dataContext}>
      <Theme>
        <Router>
          <NavigationBar />
          <Routes>
            <Route path='/'>
              <Route
                index
                element={<Home />}
              />
              <Route
                path='login'
                element={<Login />}
              />
              <Route
                path='register'
                element={<Registration />}
              />
              <Route
                path='ui'
                element={<UserInteface />}
              />
              <Route
                path='profile'
                element={<Profile />}
              />
              <Route
                path='contact-us'
                element={<Contact />}
              />
              <Route
                path='profile/edit'
                element={<EditProfile />}
              />
            </Route>
          </Routes>
        </Router>
      </Theme>
    </DataContext.Provider>
  );
};

export default App;
