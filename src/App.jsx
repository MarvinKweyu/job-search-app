
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCard from "./components/HomeCard";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";


const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<h1>My App</h1> } />)
);


const App = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <HomeCard/>
      <JobListings />
      <ViewAllJobs/>
    </>
  )
}

export default App