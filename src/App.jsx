import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import AddJob from './pages/AddJob';
import PageNotFound from './pages/PageNotFound';
import JobPage from './pages/JobPage';
import EditJobPage from './pages/EditJobPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="job/:id" element={<JobPage />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="edit-job/:id" element={<EditJobPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
