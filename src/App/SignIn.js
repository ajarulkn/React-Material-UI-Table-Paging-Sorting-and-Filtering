import React, { useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase'
import { auth } from '../util/firebase-config'
import { Button, TextField } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    'buttoncss': {
        margin: theme.spacing(1),
    },
}));

function SignIn() {
    const classes = useStyles();
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        try {
            setError("")
            await auth.signInWithPopup(provider)
            navigate("/home")
        } catch {
            setError("Failed to sign.")
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/home")
        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }

    const Login = () => {
        return (
            <div style={{ display: 'grid', justifyContent: 'center', height: '10vh', alignItems: 'center' }}>
                <div className="heading-container">
                    <h1>Login Form</h1>
                </div>
                {error && <Alert severity="error">{error}</Alert>}
                <form>
                    <div style={{ margin: '0px 10px 10px 0px' }}>
                        <TextField
                            id="outlined-primary"
                            label="Enter User Name"
                            variant="outlined"
                            color="primary"
                            margin='dense'
                            inputRef={emailRef}
                            required
                        />
                        <br></br>
                        <TextField
                            id="outlined-primary"
                            label="Enter Password"
                            variant="outlined"
                            color="primary"
                            margin='dense'
                            inputRef={passwordRef}
                            required
                        />
                    </div>
                    <div>
                        <Button color='primary' variant='contained' style={{ margin: '0px 10px 10px 0px' }} onClick={handleSubmit}>Login</Button>
                        <Button color='secondary' variant='contained' style={{ margin: '0px 10px 10px 0px' }}>Reset</Button>
                    </div>
                </form>
            </div>
        )
    };

    return (
        <div className={classes.root}>
            <Login></Login>
            <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
                <Button variant="outlined" color="primary" style={{ padding: '30px', fontSize: '20px', borderRadius: '10px', fontWeight: '600' }} onClick={signInWithGoogle}>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default SignIn