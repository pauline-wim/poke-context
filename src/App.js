import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// Components
import Home from "./components/Home";
import Login from "./components/Login";
// CSS
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header>
          <h1>Poke</h1>
          <Navbar>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
          </Navbar>
        </Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 10vw;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background: pink;
`;

export default App;
