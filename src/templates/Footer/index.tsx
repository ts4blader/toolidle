import { Link } from "react-router-dom"
import { ROUTES } from "router/paths"
import { SOCIAL } from "utils/constants"

const Footer = () => {
  return (
    <footer className="flex gap-x-20">
      <div>
        <p className="text-lg font-600">Tools</p>
        <ul className="mt-2 text-shade-300">
          <li className="link-hover">
            <Link to={ROUTES.COLOR_NAME}>Colors name</Link>
          </li>

          <li className="link-hover">
            <Link to={ROUTES.SEMANTIC_COLOR}>Semantic color</Link>
          </li>

          <li className="link-hover">
            <Link to={ROUTES.SASS_COMPLIER}>SASS Complier</Link>
          </li>

          <li className="link-hover">
            <Link to={ROUTES.COLOR_SHADE}>Color shade</Link>
          </li>
        </ul>
      </div>

      <div>
        <p className="text-lg font-600">Other</p>
        <ul className="mt-2 text-shade-300">
          <li className="link-hover">
            <Link to={SOCIAL.REPOSITORY}>Repository</Link>
          </li>

          <li className="link-hover">
            <Link to={SOCIAL.ISSUE}>Report issues</Link>
          </li>
        </ul>
      </div>

      <div className="ml-auto text-right">
        <p className="text-lg font-600">Credit</p>

        <ul className="mt-2 text-shade-300">
          <li>
            Inspire by
            <Link className="link" to="https://omatsuri.app/">
              {" "}
              Omasuri.app
            </Link>
          </li>

          <li>
            Icons by
            <Link className="visible link" to="https://www.flaticon.com">
              {" "}
              Flaticon
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export { Footer }
