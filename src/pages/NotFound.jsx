import notFound from "../assets/notFound.jpg" 
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <main className=" display-flex items-center justify-center min-h-screen p-4">
      <section className=" object-cover">
        <img
          src={notFound}
          className="w-full h-[70vh] object-cover "
          alt="404 not Found"
        />
        <Link to="/" className=" flex justify-center mt-4">
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Go Home
          </button>
        </Link>
      </section>
    </main>
  );
};

export default PageNotFound;
