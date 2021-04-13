import React, {useState, useEffect} from 'react';
import Bloglist from './Bloglist'
import useFetch from "./useFetch";

/*It's actually returning a as JSX Template not html,
which is later changed into html*/
function Home() {
    /*const [blogs, setBlogs] = useState([
        {title: 'Java', body: 'hello', author: 'John', id: 1},
        {title: 'Python', body: 'hello', author: 'Jane', id: 2},
        {title: 'React', body: 'hello', author: 'Johnny', id: 3},
    ]);*/


    /*function handleDelete(id) {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }*/

    /* Hook: Runs every time there is a State change */
    /*useEffect(() => {
        console.log(blogs);
        }, [blogs]);*/

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return(
        <div className="home">
            {isPending && <div>Loading...</div>}
            {/*Example of props*/}
            {blogs && <Bloglist blogs={blogs} title="All blogs!" /> }
           {/* <Bloglist blogs={blogs.filter((blog) => blog.author === 'mario')} title="mario blogs!" />*/}

            {error && <div>{error}</div>}
        </div>
    )
}

export default Home;
