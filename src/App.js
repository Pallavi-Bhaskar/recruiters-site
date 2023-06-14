import "./App.css";

import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BrowseJobs from "./pages/BrowseJobs";

import ForJobSeekers from "./pages/ForJobSeekers";
import BrowseCandidates from "./pages/BrowseCandidates";

import MobileRegister from "./components/register/mobileregister/mobileregister";
import MobileLogin from "./components/register/mobilelogin/mobilelogin";

import Employer from "./pages/EmloyerDasboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/browsejobs" element={<BrowseJobs />} />
        <Route path="/forrecruiters" element={<Employer />} />
        <Route path="/forjobseekers" element={<ForJobSeekers />} />
        <Route path="/browsecandidates" element={<BrowseCandidates />} />
        <Route path="/mobileregister" element={<MobileRegister />} />
        <Route path="/mobilelogin" element={<MobileLogin />} />
      </Routes>
    </div>
  );
}

export default App;
