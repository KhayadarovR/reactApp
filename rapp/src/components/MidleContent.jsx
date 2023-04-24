import React, { useState, useMemo, useEffect } from 'react';
import PostList from './PostList';
import PostForm from './PostForm';
import Modal from './Modal';
import PostFilter from './PostFilter';
import axios from 'axios'
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import {getPageCount, getPagesArray} from '../utils/page';
import Pagenations from './Paginations';

function MidleContent() {    
    const defaultPosts = []
    const [posts, setPosts] = useState([...defaultPosts]);
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [totalPages, setTotolPages] = useState(0);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);

    const [fetchPosts, isLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);

        const totalCount = (response.headers['x-total-count']);
        setTotolPages(getPageCount(totalCount, limit))
    });

    const changePage = (p) => {
        setPage(p)
    }

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
    }, [page])


    return ( 
        <div className='mt-2'>

            <Modal visible={true}>
                <PostForm create={createPost} />
            </Modal>
            
            <PostFilter 
                filter={filter}
                setFilter={setFilter}
            />

            {postError && <h1 className='text-danger'>Ошибка: ${postError}</h1>}

            {isLoading
                ?<PostList posts={sortedSerchedPosts} drop={dropPost}/>
                :            <div class="spinner-grow my-2" role="status">
                <span class="sr-only"></span>
                </div>
                }
            
            <Pagenations
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
        </div>
     );
}

export default MidleContent;