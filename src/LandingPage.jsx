import { motion } from "framer-motion";
import logo from "./assets/main_logo.png"; // Replace with your actual path
import horse from "./assets/horse.png";
 
const LandingPage = () => {
  return (
    <div className="relative">
      {/* Top Section: Green Background */}
      <div className="h-[60vh] bg-popgreen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-6 relative">
        
        {/* Horse Icon - Top Left */}
        <img src={horse} alt="Horse Icon" className="w-10 h-10 absolute top-4 left-4" />

        {/* Menu Icon - Top Right */}
        <div className="absolute top-4 right-4 space-y-1 md:space-y-2 cursor-pointer">
          <div className="w-6 h-1 bg-deepblue"></div>
          <div className="w-6 h-1 bg-deepblue"></div>
          <div className="w-6 h-1 bg-deepblue"></div>
        </div>

        {/* Left: Logo with Padding */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-start md:pl-6"
        >
          <img src={logo} alt="Magic in White Logo" className="w-64 max-w-full" />
        </motion.div>

        {/* Right: Text Box with Padding & Width Limit */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-end mt-8 md:mt-0 md:pr-6"
        >
          <div className="text-white max-w-lg">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
              WE BELIEVE THAT<br />
              INTELLIGENT CREATIVE<br />
              THINKING HELPS<br />
              ORGANISATIONS AND<br />
              INDIVIDUALS TO GROW
            </h1>
          </div>
        </motion.div>
      </div>

      {/* White Section: Description aligned with heading width */}
      <div className="bg-white px-6 py-12 flex justify-center">
        <p className="text-lg text-gray-800 max-w-lg text-center">
          Every relationship with every client is a partnership; we work
          alongside them to make their goals a reality and help them to grow
          their businesses. Whatever the task, no matter whether it's big or
          small, we bring our experience and expertise to that project and
          strive to deliver the best possible solution.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
