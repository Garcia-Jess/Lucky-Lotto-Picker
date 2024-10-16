import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; 2024 Jess Garcia. All Rights Reserved.</p>
        <div className="flex justify-center">
          <a
            className="flex items-center justify-center rounded-full mt-5 h-14 w-14 bg-white text-white px-5 py-2 text-2xl hover:bg-opacity-70"
            href="https://github.com/Garcia-Jess"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="">
              <FaGithub />
            </i>
          </a>
        </div>
      </div>
    </footer>
  );
}
