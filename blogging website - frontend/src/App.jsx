import {Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar.component";
import UserAuthForm from "./pages/userAuthForm.page";
import { createContext, useEffect, useState } from "react";
import { lookInSession } from "./common/session";
import Editor from "./pages/editor.pages";
import axios from "axios";


export const UserContext = createContext({})


const App = () => {


    const params = {
        access_key: '7b7b0261791cc9133f35010bd0a2decb',
        query: 'New York'
      }
      
     



    const [userAuth, setUserAuth]=useState({})
    useEffect(()=>{
        axios.get('https://api.weatherstack.com/current', {params})
        .then(response => {
          const apiResponse = response.data;
          console.log(apiResponse);
          console.log('hiiii')
        }).catch(error => {
          console.log(error);
          console.log('hoooo')

        });


        let userInSession = lookInSession("user")
        userInSession? setUserAuth(JSON.parse(userInSession)) : setUserAuth({access_token:null})
    },[])
    return (
        <UserContext.Provider value={{userAuth,setUserAuth}}>
      

        <Routes>
        <Route path="/editor" element={<Editor/>}/>
       <Route path="/" element={<NavBar/>}>
       <Route path="/signin" element={<UserAuthForm type='sign-in'/>}/>
       <Route path="/signup" element={<UserAuthForm type='sign-up'/>}/>
       </Route>
       
        </Routes>
        </UserContext.Provider>
 
    );
}

export default App;