import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import logo from './logo.svg';
import './App.css';


const SecondPage = () => {
    return(
    	<h3>This is second page <Link to="/"><button>fdf</button></Link></h3>
    );
}

const FirstPage = () => {
    return(
    	<h3>This is 1 page <Link to="/secondpage"><button>fdf</button></Link></h3>
    );
}

function App() {
  return (
    <Router>
      <div >
        {/*<Route path="/" exec component={Nevbar} />*/}
        {/*Include your Nevbar here*/}
        <Switch>
          <Route path="/" exact component={FirstPage} />
          <Route path="/secondpage" exact component={SecondPage} />
          
        </Switch>
         {/*<Route path="/" exec component={Footer} />*/}
         {/*Include your Footer here*/}
      </div>
    </Router>
  );
}

export default App;
