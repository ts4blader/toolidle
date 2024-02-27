import { FaLinkedin } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import { SOCIAL } from "utils/constants"
import { Footer } from "templates/Footer"
import { Nav } from "templates/Nav"

const HomePage = () => {
  return (
    <main className="home-page max-w-[1000px] mx-auto py-[10vh]">
      <div className="flex items-center justify-between">
        <img className="w-[200px]" src="/images/logo.svg" alt="toolidle" />
        <div className="text-right">
          <b>ts4blader</b>
          <div className="flex items-center mt-2 text-gray-400 gap-x-3">
            <Link
              target="_blank"
              to={SOCIAL.LINKEDIN}
              className="hover:text-linkedin"
            >
              <FaLinkedin size={24} />
            </Link>

            <Link
              target="_blank"
              to={SOCIAL.GMAIL}
              className="hover:text-google-plus"
            >
              <SiGmail size={24} />
            </Link>

            <Link
              target="_blank"
              to={SOCIAL.GITHUB}
              className="hover:text-github"
            >
              <FaGithub size={24} />
            </Link>
          </div>
        </div>
      </div>

      <hr className="my-6" />

      <div className="min-h-[80vh]">
        <Nav className="grid grid-cols-3 gap-4" />
      </div>

      <hr className="my-6" />

      <Footer />
    </main>
  )
}

export { HomePage }
