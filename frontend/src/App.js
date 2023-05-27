import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container fluid>
          <Routes>
            <Route path='/' element={<HomeScreen />}></Route>
            <Route path='/login' element={<LoginScreen />}></Route>
            <Route path='/signup' element={<SignupScreen />}></Route>
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
