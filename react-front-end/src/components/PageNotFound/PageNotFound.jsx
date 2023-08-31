import link from './404.jpg'
import './PageNotFound.scss'
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div class="notFound">
            <img className="img" src={link} />
            <button className="buttonX"><Link to="/home">HOME</Link></button>
        </div>

    )
}
export default PageNotFound
