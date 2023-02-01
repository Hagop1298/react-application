import React from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
    const { data:blogs , isPending , error } = useFetch("http://localhost:8500/blogs")
    // const [name, setName] = useState("Hagop")
    // const [age, setAge] = useState(25)

    // const handleClick = () => {
    //     // console.log("clicked");
    //     setName("Avo")
    //     setAge(28)
    // }
    
    // const [name, setName] = useState("Bedros")
   
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs)
    // }
    return (
        <div className='home'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!! " />}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Hagop")} title="Hagop's Blogs!!" /> */}
            {/* <button onClick={()=> setName("Garo")}>Change Name</button>
            <p>{name}</p> */}
            {/* <h2>Home Page</h2>
            <h4>{name} is {age} years old </h4>
            <button onClick={handleClick}>Click Me</button> */}
        </div>
    )
}

export default Home