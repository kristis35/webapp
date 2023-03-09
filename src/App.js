import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationBar, Theme } from './components';
import { Registration, UserInteface } from './pages';

const App = () => {
  return (
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
              element={<div>Login</div>}
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
  );
};

export default App;
