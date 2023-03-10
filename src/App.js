import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
function App() {

  return (
    <div className='App'>
     <NavBar/>
     <Banner/>
     <RowPost title='Netflix Originals'/>
     <RowPost title='Action' isSmall/>
    </div>
  );
}

export default App;


