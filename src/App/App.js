import React from 'react';
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import SideMenu from "../components/SideMenu";
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from "../components/Header";
import PageHeader from '../components/PageHeader';
import AppleIcon from '@material-ui/icons/Apple';
import SignIn from './SignIn';
import Employees from "../pages/Employees/Employees";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true
    }
  }
})


const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles();

  const Dashboard = () => {
    return (
      <ThemeProvider theme={theme}>
        <PageHeader title='Company Name' subTitle='Information Details' icon={<AppleIcon />}></PageHeader>
        <SideMenu />
        <div className={classes.appMain}>
          <Header />
          <Employees />
        </div>
        <CssBaseline />
      </ThemeProvider>
    )
  };

  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<SignIn />} />
            <Route exact path="/home" element={<Dashboard/>} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
