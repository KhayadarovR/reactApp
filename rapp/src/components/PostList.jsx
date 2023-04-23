import React from 'react';
import PostItem from './PostItem';

function PostList({posts, drop}) {
    if(!posts.length){
        return(
            <div class="spinner-grow my-2" role="status">
            <span class="sr-only"></span>
            </div>
        )
    }

    return (
        <div>
            {posts.map((post, index) =>
                    <PostItem drop={drop} post={post} key={post.id}/>
            )}
    </div>
    )
};

export default PostList;