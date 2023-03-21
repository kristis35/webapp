import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationBar, Theme } from './components';
import { Login, Registration, UserInteface } from './pages';
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
                element={<div>ACT Webapp</div>}
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
            </Route>
          </Routes>
        </Router>
      </Theme>
    </DataContext.Provider>
  );
};

export default App;
