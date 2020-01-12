import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginForm from './components/Forms/LoginForm';
import SignUpForm from './components/Forms/SignUpForm';
import Dashboard from './components/Dashboard';
import UserDashboard from './views/UserDashboard/UserDashboard';
import Marketplace from './components/Marketplace';
import Landing from './components/Landing';
import InterviewerForm from './components/Forms/InterviewerForm';
import StudentForm from './components/Forms/StudentForm';
import UserTypePage from './components/UserType/UserTypePage';
import MainFaq from './components/FAQ/Main';
import Booking from './components/Booking/Booking';
import Feedback from './views/Feedback/Feedback';
import VideoChat from './components/VideoChat';

function App(props) {
  const routes = (
    <Switch>
      <Route path={'/dashboard'} component={UserDashboard} />
      <Route path={'/marketplace'} component={Marketplace} />
      <Route path={'/booking'} component={Booking} />
      <Route path={'/feedback'} component={Feedback} />
      <Route path={'/settings'} component={VideoChat} />
      <Redirect to='/dashboard' />
    </Switch>
  );
  // if (localStorage.getItem('token')) {
  if (props.isLoggedIn) {
    return <Dashboard routes={routes} />;
  }
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/login/' component={LoginForm} />
      <Route path='/marketplace' component={Marketplace} />
      <Route path='/register' component={SignUpForm} />
      <Route path='/userrole' component={UserTypePage} />
      <Route path='/interviewer' component={InterviewerForm} />
      <Route path='/student' component={StudentForm} />
      <Route path='/user/type' component={UserTypePage} />
      <Route path='/faq' component={MainFaq} />
      <Redirect to='/' />
    </Switch>
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn,
    userHasChosenRole: state.userReducer.userHasChosenRole,
  };
};

export default connect(mapStateToProps)(App);
