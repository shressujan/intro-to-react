import React, {useState, useEffect} from 'react';
import Bloglist from './Bloglist'

/*It's actually returning a as JSX Template not html,
which is later changed into html*/
function Home() {
    /*const [blogs, setBlogs] = useState([
        {title: 'Java', body: 'hello', author: 'John', id: 1},
        {title: 'Python', body: 'hello', author: 'Jane', id: 2},
        {title: 'React', body: 'hello', author: 'Johnny', id: 3},
    ]);*/

    /* Loading data from db.json */
    const [blogs, setBlogs] = useState(null);

    function handleDelete(id) {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    /* Hook: Runs every time there is a State change */
    /*useEffect(() => {
        console.log(blogs);
        }, [blogs]);*/

    useEffect(() => {
       fetch('  http://localhost:8000/blogs')
           .then(response => {
               return response.json();
           })
           .then((data) => {
               setBlogs(data);
           })
    });

    return(
        <div className="home">
            {/*Example of props*/}
            {blogs && <Bloglist blogs={blogs} title="All blogs!" handleDelete={handleDelete} /> }
            <hr />
           {/* <Bloglist blogs={blogs.filter((blog) => blog.author === 'mario')} title="mario blogs!" />*/}
        </div>
    )
}

export default Home;
