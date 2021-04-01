import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import UsersDetail from './UsersDetail';
import Example from './Example';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {


  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={UserList} />
          <Route path="/UsersDetail/:userId" exact component={UsersDetail} />
          <Route path="/Example" exact component={Example} />



        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
