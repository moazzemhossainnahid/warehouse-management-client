import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
const useFirebase = () => {
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);
    const [user, loading] = useAuthState(auth);

    const [passError, setPassError] = useState('');
    const [conPassError, setConPassError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    const handleSignupForm = (event) => {
        event.preventDefault();
        // const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmpassword = event.target.confirmpassword.value;

        if(password.length < 8){
            setPassError('Password must be at least 8 Charecters');
            setConPassError('');
            return;
        }else if(password !== confirmpassword){
            setConPassError('Password & Confirm Password Not Matched..!');
            setPassError('');
            return;
        }else{
            setPassError('')
            setConPassError('');
        }

        createUserWithEmailAndPassword(email, password)
        .then( () => {
            navigate(from, {replace:true})
        })
        toast("Submitted Successfully")
        event.target.reset();

    }

    const handleSigninForm = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password)
        .then(() => {
            navigate(from, {replace:true})
        })
        event.target.reset();
        toast('Sign in Successfull')

    }

    const handleGoogleSignin = () => {
        signInWithGoogle()
        .then(() => {
            navigate(from, {replace:true})
        })
    }
    const handleGithubSignin = () => {
        signInWithGithub()
        .then(() => {
            navigate(from, {replace:true})
        })
    }

    const handleSignOut = () => {
        signOut(auth);
    }

    return {
        user,
        loading,
        passError,
        conPassError,
        handleSignupForm,
        handleSigninForm,
        handleGoogleSignin,
        handleGithubSignin,
        handleSignOut
    }
};

export default useFirebase;