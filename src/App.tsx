import { Routes, Route } from 'react-router-dom';
import { ServicesProvider } from '../src/pages/services';
import EmployeeRegistration from './pages/reg'; 
import EmployeeLogin from './pages/login';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Projects from './pages/projects';
import LeaveHistory from './pages/leavehist';
import Message from './pages/msg';
import Profile from './pages/profile';
import PendingAct from './pages/PendingActivities';

function App() {
  return (
    <ServicesProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reg" element={<EmployeeRegistration />} />
        <Route path="/login" element={<EmployeeLogin />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/leavehist" element={<LeaveHistory />}/>
        <Route path="/msg" element={<Message />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/PendingActivities" element={<PendingAct />}/>
      </Routes>
    </ServicesProvider>
  );
}

export default App;
