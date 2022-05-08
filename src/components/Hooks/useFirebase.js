import axios from 'axios';
import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const useFirebase = () => {
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);
    const [user, loading] = useAuthState(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');
    const [passError, setPassError] = useState('');
    const [conPassError, setConPassError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    useEffect(() => {
        const genToken = async() => {
            const email = user?.email;
            const {data} = await axios.post('https://serene-mesa-99604.herokuapp.com/login', {email});
            localStorage.setItem('accessToken' , data);
            
        }
        if(user){
            genToken();
            
        }
    }, [user]);

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }

    const handleConPassBlur = (event) => {
        setConPassword(event.target.value);
    }

    const handleSignupForm = (event) => {
        event.preventDefault();

        if(password.length < 8){
            setPassError('Password must be at least 8 Charecters');
            setConPassError('');
            return;
        }else if(password !== conPassword){
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
        event.target.reset();

    }

    const handleSigninForm = async(event) => {
        event.preventDefault();
        await signInWithEmailAndPassword(email, password)
        .then(() => {
            navigate(from, {replace:true})
        })

        event.target.reset();

    }

    const handleGoogleSignin = async() => {
        await signInWithGoogle()
        .then(() => {
            navigate(from, {replace:true})
        })

    }
    const handleGithubSignin = async() => {
        await signInWithGithub()
        .then(() => {
            navigate(from, {replace:true})
        })
    }

    const handleSignOut = () => {
        signOut(auth);
    }

    const handlePasswordReset = async() => {
        await sendPasswordResetEmail(email);
    }

    return {
        user,
        loading,
        passError,
        conPassError,
        handleEmailBlur,
        handlePasswordBlur,
        handleConPassBlur,
        handleSignupForm,
        handleSigninForm,
        handleGoogleSignin,
        handleGithubSignin,
        handleSignOut,
        handlePasswordReset
    }
};

export default useFirebase;