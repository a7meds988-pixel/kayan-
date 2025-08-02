import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvoicesPage from './pages/InvoicesPage';
import CustomerPage from './pages/CustomerPage';
import SupplierPage from './pages/SupplierPage';
import ExpensesPage from './pages/ExpensesPage';
import NewInvoice from './pages/NewInvoice';
import ReportsPage from './pages/ReportsPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InvoicesPage />} />
        <Route path="/customer/:id" element={<CustomerPage />} />
        <Route path="/supplier/:id" element={<SupplierPage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/new" element={<NewInvoice />} />
        <Route path="/reports" element={<ReportsPage />} />
      </Routes>
    </Router>
  );
}