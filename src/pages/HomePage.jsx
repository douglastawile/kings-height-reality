import { Link } from "react-router-dom";
import HomeCarousel from "../components/HomeCarousel";

const HomePage = () => {
  return (
    <>
      <HomeCarousel />
      <section className="my-4 mx-2 flex flex-col justify-center items-center">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Welcome to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            The Kings Height Reality
          </span>
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Your trusted partner for real estate and construction services.
        </p>
        <p className="p-4 my-4">
          <Link
            to={`/services`}
            className="text-white mt-4 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Explore Our Services
          </Link>
        </p>
      </section>
    </>
  );
};

export default HomePage;
