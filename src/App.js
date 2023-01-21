import logo from './logo.svg';
import { Routes , Route} from 'react-router-dom';
import './App.css';
import RoutingComp from './Comp/RoutingComp';
import RoutingComp2 from './Comp/RoutingComp2';
import Anything from './Comp/Anything';

function App() {
  return (<>
    <div>
      I am typing this for some testing..!!
    <Anything />
    </div>
      <Routes>
        <Route exact path="/" element={<RoutingComp2 />}></Route>
        <Route path="test" element={<RoutingComp /> }></Route>
      </Routes>

    </>
  );
}

export default App;
