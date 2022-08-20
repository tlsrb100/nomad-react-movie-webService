import {BrowserRouter as Router,
Routes,
Route,
Link,
BrowserRouter} from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Movie from './components/movie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/movie/:id' element={<Detail/>}></Route>
        <Route path='/' element={<Home/>}></Route>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
