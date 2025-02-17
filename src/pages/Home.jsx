import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllBtn from '../components/ViewAllBtn';

function Home() {
  return (
    <>
      <Hero />
      <HomeCards />

      <JobListings isHome={true} />

      <ViewAllBtn />
    </>
  );
}

export default Home;
