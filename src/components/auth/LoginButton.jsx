import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { auth, googleAuthProvider } from "config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";

export default function LoginButton(props) {
    const appUser = props.appUser;

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleAuthProvider);
        } catch (error) {
            console.log(error);
        }
    }

    const signOutWithGoogle = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <button
            onClick={appUser ? signOutWithGoogle : signInWithGoogle}
            type="button"
            className="inline-flex flex-col gap-1 items-center justify-center px-5 hover:bg-alternate group"
        >
            <FontAwesomeIcon icon="user" className="text-accent" />
            <span className="text-sm text-primary group-hover:text-secondary">
                {appUser ? "Sign out" : "Sign in"}
            </span>
        </button>
    );
}