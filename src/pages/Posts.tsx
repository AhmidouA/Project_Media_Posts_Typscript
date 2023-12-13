import React, {useEffect, useState} from 'react';

// Css
import './posts.styles.css';

// Component 
import Postslist from '../Components/Postslist';
import { PostsData } from '../interfaces';



const Posts: React.FC = () => { // functional component
    // State
    const [allPosts, setAllPosts] = useState<PostsData[] | null>(null);
    const [numberOfPosts, setNumberOfPosts] = useState<number>(5);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumberOfPosts(event.target.valueAsNumber);
        localStorage.setItem('number', event.target.value);
    };

    const localOrStateNumber = () => localStorage.getItem('number') || numberOfPosts;

    useEffect(() => {
        const getPosts = async() => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${localOrStateNumber()}`);
            const data: PostsData[] = await response.json();
            // console.log("data", data);
            setAllPosts(data);
        }
        getPosts();
       
    }, [localOrStateNumber]);

;
    
  return (
    <div className="post-container">
        <h1>Home Page</h1>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <label htmlFor='posts'>Nombre de publication {localOrStateNumber()}</label>
                <input type='range' min={1} max={20} onChange={handleChange} defaultValue={localOrStateNumber()}/>
                <Postslist allPosts={allPosts}/>
            </div>
    </div>
  )
}

export default Posts;