import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';

function PostDetails() {
    const routeParams = useParams();
    const [post, setPost] = useState({}); 

    const [fetchPost, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(routeParams.id);
        setPost(response.data);
    })

    useEffect(() => {
        console.log(routeParams.id)
        fetchPost(routeParams.id)
    }, [])

    if(isLoading){
        <div class="spinner-grow my-2" role="status">
        <span class="sr-only"></span>
        </div>
    }

    return (
        <div class="card" style={{width: 18 +'rem'}}>
        <div class="card-body">
            <div>
            <h5 class="card-title">{post.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{post.id}</h6>
            <p class="card-text">{post.body}</p></div>
            <a href="/" class="card-link">Назад</a>
        </div>
        </div>
     );
}

export default PostDetails;