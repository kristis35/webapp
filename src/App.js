import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationBar, Theme } from './components';
import { Registration, UserInteface } from './pages';
import { Login } from './pages';
import { DataContext } from './utils';

const App = () => {
  const apiName = 'http://localhost:8080';
  return (
    <DataContext.Provider value={{ API: apiName }}>
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
