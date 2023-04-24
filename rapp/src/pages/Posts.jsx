import React, { useState, useMemo, useEffect } from 'react';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import {getPageCount} from '../utils/page';
import MidleContent from '../components/MidleContent';
import NavBar from '../components/NavBar';

function Posts() {    
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
        <div className="App">
        <NavBar></NavBar>
        <div className='container'>
  
        <div class="row">
          <div class="col">
  
  
          </div>
          <div class="col-8">
            
            <MidleContent />
  
          </div>
          <div class="col">
          </div>
        </div>
  
        </div>
      </div>
     );
}

export default Posts;