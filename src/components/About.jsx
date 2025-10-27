import { motion } from "framer-motion";
import { Code2, Palette, Smartphone, Globe } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-6 bg-[#07090d] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-[#5d79f3] text-transparent bg-clip-text">
            About Me
          </h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full" />
            <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
          </motion.div>{" "}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a self-taught frontend developer skilled in React.js, Redux
              Toolkit, and Tailwind CSS. I focus on building responsive,
              user-friendly interfaces with attention to detail and a passion
              for clean, scalable design.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              What started as curiosity has grown into a career dedicated to
              creating web experiences that make a real impact.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1ab7e3] mb-2">
                  10+
                </div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1ab7e3] mb-2">1+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Skills Icons */}
          <div className="grid grid-cols-2 gap-4">
            {[Code2, Palette, Smartphone, Globe].map((Icon, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 bg-[#131822] shadow-md hover:shadow-xl transition-all text-center backdrop-blur-sm"
              >
                <Icon className="w-8 h-8 text-[#1ab7e3] mx-auto mb-3" />
                <h3 className="font-semibold mb-1 text-lg">
                  {["Web Dev", "UI/UX", "Mobile", "SEO"][index]}
                </h3>
                <p className="text-sm text-gray-400">
                  {
                    [
                      "Modern web applications",
                      "Beautiful user interfaces",
                      "Responsive design",
                      "Search optimization",
                    ][index]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
