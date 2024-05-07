import Header from "./components/Header/Header";
import JobCard from "./components/JobCard/JobCard";
import JobListing from "./components/JobListing/JobListing";
import "./page.css"
export default function Home() {
  return (
    <div className="app">
      <Header />
      <JobListing />
    </div>
  );
}
