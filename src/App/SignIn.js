import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase'
import { auth } from '../util/firebase-config'
import { Button, TextField } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    'buttoncss': {
        margin: theme.spacing(1),
    },
}));

function SignIn() {
    const classes = useStyles();

    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    const Login = () => {
        return (
            <div style={{ display: 'grid', justifyContent: 'center', height: '10vh', alignItems: 'center' }}>
                <div className="heading-container">
                    <h1>Login Form</h1>
                </div>
                <form>
                    <div style={{ margin: '0px 10px 10px 0px' }}>
                        <TextField
                            id="outlined-primary"
                            label="Enter User Name"
                            variant="outlined"
                            color="primary"
                            margin='dense'
                        />
                        <br></br>
                        <TextField
                            id="outlined-primary"
                            label="Enter Password"
                            variant="outlined"
                            color="primary"
                            margin='dense'
                        />
                    </div>
                    <div>
                        <Button color='primary' variant='contained' style={{ margin: '0px 10px 10px 0px' }}>Login</Button>
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