'use client'

import { useState, useEffect } from 'react';
import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className='mt-16 prompt_layout'>
            {data.map((post) => (
                <PromptCard
                key={post._id}
                post={post}
                handleTagClick={handleTagClick}
              />
            ))}
        </div>
    )
}

const Feed = () => {

    const [searchText, setSearchText] = useState('');
    const [searchedResult, setSearchedResult] = useState('');
    const [posts, setPosts] = useState([])

    const filterPrompts = (searchtext) => {
        const regex = new RegExp(searchtext, 'i');

        return posts.filter((post) => 
            regex.test(post.creator.username) ||
            regex.test(post.tag) ||
            regex.test(post.prompt)
        );
    };

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);

        const search = filterPrompts(e.target.value);
        setSearchedResult(search);
    }

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/prompt');
            const data = await response.json();

            setPosts(data);
        }

        fetchPosts();
    }, []);

  return (
    <section className='feed'>
        <form className='relative w-full flex-center'>
            <input 
                type='text'
                placeholder='Search for a tag or a username'
                value={searchText}
                onChange={handleSearchChange}
                required
                className='search_input peer'
            />
        </form>

        {searchText ? (
            <PromptCardList 
                data={searchedResult}
                handleTagClick={() => {}}
            />
        ) : (
            <PromptCardList 
                data={posts}
                handleTagClick={() => {}}
            />

        )}
    </section>
  )
}

export default Feed