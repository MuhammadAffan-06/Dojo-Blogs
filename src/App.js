
import Navbar from './navbar'
import Home from './home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './Notfound';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}> </Route>
            <Route path="/create" element={<Create />}> </Route>
            <Route path="/blog/:id" element={<BlogDetails />}> </Route>
            <Route path="*" element={<NotFound />} >

            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
