import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
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
