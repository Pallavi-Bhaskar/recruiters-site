import "./App.css";
import Navbar from "./components/navbar/navigation";
import Navbartab from "./components/tab/navbar/navbar";
import Mobile from "./components/mobile/mobile";
// import Navbar from "./navbar";
import Ap from "./components/mobile/mobiles";
import LoginRegister from "./components/dropdown/logindropdown";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BrowseJobs from "./pages/BrowseJobs";
import ForRecruiters from "./pages/ForRecruiters";
import ForJobSeekers from "./pages/ForJobSeekers";
import BrowseCandidates from "./pages/BrowseCandidates";
import Navigation from "./components/navbar/navigation";
import MobileRegister from "./components/register/mobileregister/mobileregister";
import MobileLogin from "./components/register/mobilelogin/mobilelogin";
import Dropdown from "./components/dropdown/dropdown";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/browsejobs" element={<BrowseJobs />} />
        <Route path="/forrecruiters" element={<ForRecruiters />} />
        <Route path="/forjobseekers" element={<ForJobSeekers />} />
        <Route path="/browsecandidates" element={<BrowseCandidates />} />
        <Route path="/mobileregister" element={<MobileRegister />} />
        <Route path="/mobilelogin" element={<MobileLogin />} />
      </Routes>
      {/* <Dropdown /> */}
    </div>
  );
}

export default App;
