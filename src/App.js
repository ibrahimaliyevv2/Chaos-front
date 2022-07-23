import Home from "./pages/Home";
import Header from "./components/Header"
import './css/App.css';
import NotFound from './pages/NotFound';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={< NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
