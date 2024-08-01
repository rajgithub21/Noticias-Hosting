import React from 'react';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Stripes from './components/Stripes';
import Products from './components/Products';
import Maruess from './components/Maruess';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Motogp from './components/Motogp';
import Formula1 from './components/Formula1';
import Cricket from './components/Cricket';
import Football from './components/Football';
import {RouterProvider,createBrowserRouter}  from "react-router-dom";
import Home from './components/Home';
import Tennis from './components/Tennis';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/sports0",
    element: <Cricket/>
  },
  {
    path: "/sports1",
    element: <Formula1/>
  },
  {
    path: "/sports2",
    element: <Motogp/>
  },
  {
    path: "/sports3",
    element: <Football/>
  },
  {
    path: "/sports4",
    element: <Tennis/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  }
])


//import Sportsnew from './components/Sportsnew';



function App() {
 
  return (

    <RouterProvider router={router} />
    // <div className='w-screen h-full bg-zinc-900 text-white'>
      

    //   <Navbar/>
    //   <Work/>
    //   <Stripes/>
    //   <Products/>
    //   <Maruess/>
    //   <Cards/>
    //   <Footer/>
     
    

    //   <Routes>
      
    //     <Route exact path="/sports0" element={<Cricket/>}></Route>
    //     <Route exact path="/sports1" element={<Motogp></Motogp>}/>
    //     <Route exact path="/sports2" element={<Formula1></Formula1>}/>
    //     <Route exact path="/sports3" element={<Formula1></Formula1>}/>
    //     <Route exact path="/sports4" element={<Motogp></Motogp>}/>
       
    //    </Routes>
   
    // </div>

   
  );
}

export default App;