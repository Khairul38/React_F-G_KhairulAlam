import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import AllFeedback from "./pages/AllFeedback";
import Feedback from "./pages/Feedback";
import FeedbackDetails from "./pages/FeedbackDetails";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Feedback />} />
        <Route path="/allFeedback" element={<AllFeedback />} />
        <Route path="/allFeedback/:feedbackId" element={<FeedbackDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
