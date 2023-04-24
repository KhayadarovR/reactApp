import React from 'react';
import Button from './UI/Button';
import {useHistory, useNavigate} from 'react-router-dom';


function PostItem({post, drop}) {
    const navigate = useNavigate()

    return ( 
        <div className='card-body bg-secondary my-2'>
            <h3 className='card-title'>{post.title}</h3>
            <p className='card-text'>{post.id}: {post.body}</p>
            <Button onClick={() => drop(post.id)} className='btn btn-danger'>Удалить</Button>
            <Button onClick={() => navigate('/posts/' + post.id)} className='btn btn-info'>Детально</Button>
        </div>
     );
}

export default PostItem;