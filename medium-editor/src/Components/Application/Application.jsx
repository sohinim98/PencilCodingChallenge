import React, { useContext } from 'react';
import { Router } from '@reach/router';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import ProfilePage from '../ProfilePage/ProfilePage';
import { UserContext } from '../../providers/UserProvider';
import PasswordReset from '../PasswordReset/PasswordReset';

export const Application = () => {
  const user = useContext(UserContext);
  return (
        user ?
        <ProfilePage />
      :
        <Router>
          <SignUp path='signUp' />
          <SignIn path='/' />
          <PasswordReset path = 'passwordReset' />
        </Router>

  );
}
export default Application;
