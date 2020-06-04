import React, { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';
import ContentProvider from '../../providers/ContentProvider';
import {auth} from '../../firebase';

import TextEditor from '../TextEditor/TextEditor';

const ProfilePage = () => {
  const user = useContext(UserContext);
  const {photoURL, displayName, email} = user;
  return (
    <div>
      <div>
        <div
          style={{
            background: `url(${photoURL || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
            backgroundSize: "cover",
            height: "200px",
            width: "200px"
          }}
        ></div>
        <div>
        <h2>{displayName}</h2>
        <h3>{email}</h3>
        <ContentProvider>
          <TextEditor />
        </ContentProvider>
        </div>
      </div>
      <button onClick = {() => {auth.signOut()}}>Sign out</button>
    </div>
  )
};
export default ProfilePage;
