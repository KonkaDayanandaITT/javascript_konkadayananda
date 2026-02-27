import { useState} from "react";
import {BrowserRouter, Navigate, Routes, Link, Route, Outlet} from "react-router-dom";

function Login(){
  return <h1>Login page</h1>
}

function Dashboard(){
  return <h1>Dashboard page</h1>
}

function Profile(){
  return <h1>Profile page</h1>
}

function ProtectedRoute({ isLoggedIn}){
  if(!isLoggedIn){
    return <Navigate to="/login" replace />
  }
  return <Outlet />
}

function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
      <BrowserRouter>
        <nav>
          <Link to="/login">Login</Link> | {" "}
          <Link to="/dashboard">DashBoard</Link> | {" "}
          <Link to="/profile">Profile</Link>
        </nav>
        <hr />

        <button onClick={() => setIsLoggedIn(true)}>Fake Login</button>
        <br />
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />} >
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}
export default App;