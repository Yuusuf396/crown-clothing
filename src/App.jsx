<<<<<<< HEAD
import { useState } from 'react'
import {Link, NavLink, Route,Routes, useRoutes } from 'react-router-dom'

import './App.css'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './components/shop/shop.component'
import Header from './components/header.component/header.component'
import Page1 from './router/page1'
import Booklist from './router/Booklist'
import Routeii from './router/route'
import Book from './router/Book'
import NewBook from './router/NewBook'
import NotFound from './router/NotFound'
import Home from './router/Home'
import { BookLayout } from './router/BookLayout'
import { BookRoutes } from './router/BookRoutes' 
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'


// import Routeii from './router/route'

 
  function App() {
  // let element =useRoutes([
  //   {
  //     path:'/',
  //     element:<Home/>,
  //   }, 
  //   {
  //     path:'*',
  //     element:<NotFound/>,
  //   }
  // ])
  return (
    <div className="App">
      <Header/>
     {/* <HomePage/>  */}
      <Routes>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/shop' element={<ShopPage/>}/>
     <Route path='/signin' element={<SignInAndSignUpPage/>}/>

     </Routes>
 
  
      {/* <nav>
        <ul>
           <li>
            <NavLink to="/page1">pages</NavLink>
            </li>
           <li><NavLink to="/books">Books</NavLink></li>
           <li><NavLink to="/">Home</NavLink></li>
           <li></li>
           <li></li>
        </ul>
      </nav>
      {/* {element} 
       <Routes>
        
        <Route  path='/books/*' element={<BookRoutes/>}/> 

        <Route path="/page1" element={<Page1/>} />
        <Route path="/" element={<Home/>} />
        
        <Route path="*" element={<NotFound/>}/>

      </Routes>   */}
    </div>
=======
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import SignIn from './sign-in/sign-in'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <SignIn/>
    </>
>>>>>>> 84fb644 (finalising the design on the sign-up page)
  )
}

export default App
