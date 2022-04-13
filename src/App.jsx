import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { listen } from './app/listener';
import { useSelector } from 'react-redux';
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import Logout from './pages/Auth/Logout/Logout'
import Dashboard from './pages/Dashboard/Dashboard'
import Transaction from './pages/Dashboard/Transaction'
import Address from './pages/Dashboard/Address'
import Account from './pages/Dashboard/Account'
import Checkout from './pages/Dashboard/Checkout'
import Invoices from './pages/Dashboard/Invoices'

const App = () => {
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    listen();
  }, [])

  return (
    <Router>
      <Routes>
{/*        
        <Route path="/checkout" component={Checkout}/>
        <Route path="/account" component={Account}/>
        <Route path="/cart" component={Cart}/>*/}
        <Route path="/" exact element={<Home />} />
        <Route
          path="/auth/signin" 
          element={ auth.user ? <Navigate to="/" replace /> : <Login />  }
        />
        <Route path="/auth/signup" element={<Register />} />
        <Route path="/auth/logout" element={<Logout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/address" element={<Address />} />
        <Route path="/account" element={<Account />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/invoices/:id" element={<Invoices />} />
      </Routes>
    </Router>
  )
};

export default App