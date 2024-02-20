import { useState } from 'react';
import { auth, googleAuthProvider } from "config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import NavButton from 'components/ui/navigation/NavButton';
import PropTypes from 'prop-types';

export const GoogleAuthProvider = (props) => {
  const [appUser, setAppUser] = useState(null);

  auth.onAuthStateChanged(function (firebaseUser) {
    if (firebaseUser) {
      setAppUser(firebaseUser);
      props.sendAppUser(firebaseUser);
    } else {
      setAppUser(null);
      props.sendAppUser(null);
    }
  });

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      setAppUser(auth.currentUser);
    } catch (error) {
      console.log(error);
    }
  }

  const signOutWithGoogle = async () => {
    try {
      await signOut(auth);
      setAppUser(null);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <NavButton 
      onClick={ appUser ? signOutWithGoogle : signInWithGoogle } 
      icon="user" 
      text={ appUser ? "Sign out" : "Sign in" } 
    />
  );
}

GoogleAuthProvider.propTypes = {
  sendAppUser: PropTypes.func.isRequired,
};

export default GoogleAuthProvider;