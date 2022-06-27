import React from 'react';
import { Grid, } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/useForm';

function LoginForm({ title, setPassword, setUserName, handleAction }) {
    
    return (
        <Form style={{padding:'15px'}}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="userName"
                        label="Enter User Name"
                        value={values.userName}
                        onChange={(e) => setUserName(e.target.value)}
                        error={errors.userName}
                    />
                    <Controls.Input
                        name="password"
                        label="Enter Password"
                        value={values.password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={errors.password}
                    />
                </Grid>
            </Grid>
        </Form>
    );
}

export default LoginForm;