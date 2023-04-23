import React, { useState, useMemo, useEffect } from 'react';
import PostList from './PostList';
import PostForm from './PostForm';
import Modal from './Modal';
import PostFilter from './PostFilter';
import axios from 'axios'
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';

function MidleContent() {    
    const defaultPosts = []
    const [posts, setPosts] = useState([...defaultPosts]);
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [fetchPosts, isLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAll();
        setPosts(posts);
    });

    const sortedPosts = useMemo(() => {
        console.log('get sorted post: ' + filter.sort)
        if(filter.sort){
            return setPosts([...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort])))
        }
        return posts
    }, [ filter.sort ,posts])


    const sortedSerchedPosts = useMemo(() => {
        return sortedPosts.filter(p => p.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])


    function createPost(newPost) {
        setPosts([...posts, newPost]);
        console.log(newPost);
    }

    const dropPost = (id) => {
        setPosts(posts.filter(p => p.id !== id));
    }

    useEffect(() => {
        fetchPosts();
    }, [])


    return ( 
        <div className='mt-2'>

            <Modal visible={true}>
                <PostForm create={createPost} />
            </Modal>
            
            <PostFilter 
                filter={filter}
                setFilter={setFilter}/>

            {postError && <h1 className='text-danger'>Ошибка: ${postError}</h1>}

            {isLoading
                ?<PostList posts={sortedSerchedPosts} drop={dropPost}/>
                :            <div class="spinner-grow my-2" role="status">
                <span class="sr-only"></span>
                </div>
                }
            

        </div>
     );
}

export default MidleContent;