import UseFetch from "./UseFetch";
import BlogList from "./BlogList";

const Home =()=>{

    const{data:blogs}= UseFetch('http://localhost:4000/blogs/')

    return(
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
        </div>
    )
}
export default Home;