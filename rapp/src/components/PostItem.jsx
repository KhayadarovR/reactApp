import React from 'react';
import Button from './UI/Button';


function PostItem({post, drop}) {
    return ( 
        <div className='card-body bg-secondary my-2'>
            <h3 className='card-title'>{post.title}</h3>
            <p className='card-text'>{post.id}: {post.body}</p>
            <Button onClick={() => drop(post.id)} className='btn btn-danger'>Удалить</Button>
        </div>
     );
}

export default PostItem;