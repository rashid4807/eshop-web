import { Container } from 'react-bootstrap';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/homeScreen'


function App() {
  return (
    <div className="App">
      <Header />
      <main className='py-3'>
        <Container>
           <HomeScreen/>
        </Container>
       
      </main>
      <Footer />
    </div>
  );
}

export default App;
