import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <main>
        <Container fluid>
          <Routes>
            <Route path='/' element={<HomeScreen />}></Route>
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
