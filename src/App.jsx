import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Layout from './Layout'
import { ContactUs, CreateOrder4, CreateOrder3, CreateOrder2, CreateOrder1, CreateOrder, Home, Settings, SignIn, SignUp, SignUp1, SignUp2, AllOrders, TrackOrder, Welcome, UserProfile} from './pages'

function App() {

  return (    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signup1' element={<SignUp1/>}/>
          <Route path='signup2' element={<SignUp2/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/userprofile' element={<UserProfile/>}/>

          <Route path='/home' element={<Layout><Home/></Layout>}/>
          <Route path='/createorder' element={<Layout><CreateOrder/></Layout>}/>
          <Route path='createorder1' element={<Layout><CreateOrder1/></Layout>}/>
          <Route path='/createorder2' element={<Layout><CreateOrder2/></Layout>}/>
          <Route path='/createorder3' element={<Layout><CreateOrder3/></Layout>}/>
          <Route path='/createorder4' element={<Layout><CreateOrder4/></Layout>}/>
          <Route path='/trackorder' element={<Layout><TrackOrder/></Layout>}/>
          <Route path='/allorders' element={<Layout><AllOrders/></Layout>}/>
          <Route path='/settings' element={<Layout><Settings/></Layout>}/>
          <Route path='/contact' element={<Layout><ContactUs/></Layout>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
