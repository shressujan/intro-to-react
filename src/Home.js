import React, {useState} from 'react';
import Bloglist from './Bloglist'

/*It's actually returning a as JSX Template not html,
which is later changed into html*/
function Home() {
    const [blogs, setBlogs] = useState([
        {title: 'Java', body: 'hello', author: 'John', id: 1},
        {title: 'Python', body: 'hello', author: 'Jane', id: 2},
        {title: 'React', body: 'hello', author: 'Johnny', id: 3},
    ]);

    function handleDelete(id) {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    return(
        <div className="home">
            {/*Example of props*/}
            <Bloglist blogs={blogs} title="All blogs!" handleDelete={handleDelete} />
            <hr />
            <Bloglist blogs={blogs.filter((blog) => blog.title === 'Java')} title="Java blogs!" />
        </div>
    )
}

export default Home;
