import { routes } from '../helpers/routes'
import { Link } from 'react-router-dom'

const Breadcrumb = ({pageName}) => {
  return (
    <div className="flex flex-col gap-3 mb-6 poppins-medium-italic sm:flex-row sm:items-center sm:justify-between">
    <h2 className="text-black text-title-md2 dark:text-white">
      {pageName}
    </h2>

    <nav>
      <ol className="flex items-center gap-2">
        <li>
          <Link className="text-blue-500" to={routes.DASHBOARD}>
            Dashboard /
          </Link>
        </li>
        <li className="text-primary">{pageName}</li>
      </ol>
    </nav>
  </div>
  )
}

export default Breadcrumb