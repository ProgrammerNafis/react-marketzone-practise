import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'
import OrderReview from './components/OrderReview/OrderReview'
import InventoryManage from './components/inventoryManage/inventoryManage'

function App() {


  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      
      <Route path='/' element={<Shop/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/order/:id' element={<OrderReview/>}/>
      <Route path='/inventoryManage' element={<InventoryManage/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
