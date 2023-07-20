import { Routes, Route } from "react-router-dom";

import WelcomePage from "./components/WelcomePage"
import Categories from "./components/Categories"
import Category from "./components/Category"
import Navbar from './components/Navbar';
import About from "./components/About"
import Account from "./components/Account"
import Partner from "./components/Partner"
import './App.css';

export default function App() {
  return (
 <div className="everything">
  <Navbar />
  <main>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="categories" element={<Categories />} />
      <Route path="categories/:id" element={<Category />} />
      <Route path="about" element={<About />} />
      <Route path="account" element={<Account />} />
      <Route path="partner" element={<Partner />} />
    </Routes>
    
    </main>
    </div>
    )
}
