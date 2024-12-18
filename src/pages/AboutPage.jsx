import { useEffect } from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";

const AboutPage = () => {
  useEffect(() => {
    document.title = `About Me | The Kings Height Realty`;

    return () => {
      document.title = `The Kings Height Realty`;
    };
  }, []);

  return (
    <div>
      <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        About Me
      </h1>

      <Card className="max-w-xl mx-4 sm:mx-auto mt-8">
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <img
            src="/yussif.jpg"
            height={200}
            width={200}
            alt="Bonnie image"
            className="mb-3 rounded-full shadow-lg"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Abubakar Yussif
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Mr. Abubakar Yussif is the CEO of The Kings Height Realty and a
            Property Consultant with over three years of experience.
          </span>

          <h5 className="mt-2 text-xl text-slate-600 font-semibold dark:text-slate-400">
            You can follow me on the following social media:
          </h5>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <Link
              to="https://www.facebook.com/profile.php?id=100066314719313"
              target="_blank"
              className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
            >
              <FaFacebookF className="mx-2 text-lg" />
              Facebook
            </Link>
            <Link
              to="https://www.instagram.com/the_kings_height.realty?igsh=YzljYTk1ODg3Zg=="
              target="_blank"
              className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              <FaInstagramSquare className="mx-2 text-lg" /> Instagram
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AboutPage;
