import React from "react";
import { Route, Link, Switch } from 'react-router-dom'
import EmployeeView from './Views/EmployeeView'
import EmployerView from './Views/EmployerView'

function App() {
  return (
    <>
      <Link to='/employeeView'>Employee View</Link>
      <Link to='/employerView'>Employer View</Link>
      <Switch>

        {/* <Route path="/login" component={Login} /> */}
        {/* <Route exact path='/' component={Home}></Route> */}
        <Route path='/employeeView' component={EmployeeView}></Route>
        <Route path='/employerView' component={EmployerView}></Route>
      </Switch>
    </>
  );
}

export default App;






