import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import {Originals,Action,Comedy,Romance,Horror} from './Urls'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
function App() {

  return (
    <div className='App'>
     <NavBar/>
     <Banner/>
     <RowPost Url={Originals} title='Netflix Originals'/>
     <RowPost Url={Action} title='Action' isSmall/>
     <RowPost Url={Comedy} title='Comedy' isSmall/>
     <RowPost Url={Romance} title='Romance' isSmall/>
     <RowPost Url={Horror} title='Horror' isSmall/>
    </div>
  );
}

export default App;


