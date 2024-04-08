import { Link } from "react-router-dom"
import logo from '../imgs/logo.png'

const BlogEditor =()=>{

  return(
<nav className="navbar">
  <Link to={'/'} className=" flex-none w-10">
    <img src={logo}/>
  </Link>
</nav> 

)

}
export default BlogEditor