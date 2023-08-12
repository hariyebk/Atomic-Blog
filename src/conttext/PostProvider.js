import {useState, useEffect,  createContext, useContext } from "react";
import { faker } from "@faker-js/faker";

function createRandomPost() {
    return {
        title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
        body: faker.hacker.phrase(),
    };
}

const PostContext = createContext()

function PostProvider({children}) {
    const [isFakeDark, setIsFakeDark] = useState(false);
    const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost()));
    const [searchQuery, setSearchQuery] = useState("");
    // Derived state. These are the posts that will actually be displayed
    const searchedPosts =
        searchQuery.length > 0
        ? posts.filter((post) =>
            `${post.title} ${post.body}`
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            )
        : posts;
    useEffect(
         // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
        function () {
            document.documentElement.classList.toggle("fake-dark-mode");
        },
        [isFakeDark]
        );
    function handleAddPost(post) {
        setPosts((posts) => [post, ...posts]);
    }
    function handleClearPosts() {
        setPosts([]);
    }

    return (
        <PostContext.Provider value = {{
            posts: searchedPosts,
            onAddPost: handleAddPost,
            onClearPosts: handleClearPosts,
            isFakeDark,
            setIsFakeDark,
            searchQuery,
            setSearchQuery,
            createRandomPost
        }}>
            {children}
        </PostContext.Provider>
    )
}

// context consumer
function usePosts (){
    const context = useContext(PostContext)
    if(!context) throw new Error ("You should use the usePosts custom hook inside of the context provider component instances")
    return context
}

export  {PostProvider, usePosts}
