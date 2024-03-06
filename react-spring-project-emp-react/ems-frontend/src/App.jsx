
import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'

import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
  
    <>
      <BrowserRouter>
       <HeaderComponent/>
       <Routes>
        {/* //localhost:3000 */}
        <Route path= '/' element= { <ListEmployeeComponent/>}></Route>

        {/* //localhost:3000/employees */}
        <Route path= '/employees' element= { <ListEmployeeComponent/>}></Route>

        {/* //localhost:3000/add */}
        <Route path ='/add' element={ <EmployeeComponent/>}></Route>

         {/* //localhost:3000/edit-employee/1 */}
         <Route path ='/edit-employee/:id' element={ <EmployeeComponent/>}></Route>
       </Routes>
      
       <FooterComponent/>
      </BrowserRouter>

      
       
    </>
  )
}

export default App
