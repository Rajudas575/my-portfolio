import { FaGithub, FaHeart, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  const currenYear = new Date().getFullYear();
  return (
    <footer
      style={{
        background: darkMode
          ? "Linear-linear(to bottom, #000000, #111827)"
          : "Linear-linear(to bottom, #f3f4f6, #e5e7eb)",
        borderColor: darkMode ? "#374151" : "#d1d5db",
      }}
      className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div
          className="flex flex-col md:flex-row justify-between
            items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 text-yellow-500 dark:text-white">
              Portfolio
            </h3>
            <p
              className="text-sm"
              style={{
                color: darkMode ? "#9ca3af" : "#6b7280",
              }}>
              Full Stack Develper $ UI/UX Designer
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110
              transition-all hover:bg-linear-to-r hover:from-yellow-500 hover:to-amber-500 hover:text-white
              bg-[#374151] dark:bg-[#f3f4f6]
              text-white dark:text-[#374151]">
              <FaGithub />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110
              transition-all hover:bg-linear-to-r hover:from-yellow-500 hover:to-amber-500 hover:text-white
              bg-[#374151] dark:bg-[#f3f4f6]
              text-white dark:text-[#374151]">
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110
              transition-all hover:bg-linear-to-r hover:from-yellow-500 hover:to-amber-500 hover:text-white
              bg-[#374151] dark:bg-[#f3f4f6]
              text-white dark:text-[#374151]">
              <FaTwitter />
            </a>
          </div>
          <div className="text-center md:text-right">
            <p
              className="text-sm flex items-center justify-end
              gap-1 text-[#6b7280] dark:text-[#9ca3af]">
              @{currenYear} Made with <FaHeart className="text-red-500" />
              by <span className="mt-1 text-[#169ef9]">Raju Das</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
