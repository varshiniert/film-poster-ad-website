import { motion } from "framer-motion";
import logo from "./assets/logo.png"; // Replace with your actual logo path
import horse from "./assets/horse.png"; // Replace with your actual horse icon path

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-popgreen flex flex-col p-4 md:flex-row md:items-center md:justify-between">
      {/* Top Left Icon */}
      <img src={horse} alt="Horse Icon" className="w-10 h-10 absolute top-4 left-4" />

      {/* Menu icon */}
      <div className="absolute top-4 right-4 space-y-1 md:space-y-2 cursor-pointer">
        <div className="w-6 h-1 bg-deepblue"></div>
        <div className="w-6 h-1 bg-deepblue"></div>
        <div className="w-6 h-1 bg-deepblue"></div>
      </div>

      {/* Logo & Title */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center w-full md:w-1/2"
      >
        <img src={logo} alt="Magic in White Logo" className="w-72 mb-6" />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-white md:w-1/2 mt-8 md:mt-0 px-4"
      >
        <h1 className="font-mont text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
          WE BELIEVE THAT<br />
          INTELLIGENT CREATIVE<br />
          THINKING HELPS<br />
          ORGANISATIONS AND<br />
          INDIVIDUALS TO GROW
        </h1>
        <p className="font-mont mt-4 text-lg text-[#111] max-w-xl">
          Every relationship with every client is a partnership; we work
          alongside them to make their goals a reality and help them to grow
          their businesses. Whatever the task, no matter whether it's big or
          small, we bring our experience and expertise to that project and
          strive to deliver the best possible solution.
        </p>
      </motion.div>
    </div>
  );
};

export default LandingPage;
