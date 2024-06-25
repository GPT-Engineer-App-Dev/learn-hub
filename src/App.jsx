import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/course/:courseId" element={<CourseDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
