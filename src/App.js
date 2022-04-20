import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import User from './components/User';
import Layout from './components/Layout';
import Profile from './components/Profile';
import Transactions from './components/Transactions';
import Transaction from './components/Transaction';

import './App.css';

const App = () => {
  const transactions = [
    { id: '1', details: 'Transaction 1' },
    { id: '2', details: 'Transactions 2' },
  ];

  return (
    <div className='container'>
      <Router>
        <h1>React Router</h1>

        <nav>
          <Link to="/home">Home</Link>
          <Link to="/user">User</Link>
        </nav>

        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="user" element={<User />}>
              <Route index element={<Profile />} />
              <Route path="profile" element={<Profile />} />
              <Route path="transactions" element={<Transactions transactions={transactions} />}>
                <Route path=':transactionId' element={<Transaction />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
