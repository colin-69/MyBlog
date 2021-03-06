import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handelClick= () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <h3>Written by {blog.author}</h3>
                    <div>{blog.body}</div>
                    <button onClick={handelClick}>delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;