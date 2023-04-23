import React from 'react';
import Button from './UI/Button';
import { useState } from 'react';


function PostForm({create}) {
    const [post, setPost] = useState({title: '', body: ''});

    const addPost = (e) =>{
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            ...post,
        }
        
        create(newPost);
        setPost({title: '', body: ''});
    } 

    return ( 
        <form>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">Название поста</span>
                <input value={post.title} onChange={e => setPost({...post, title: e.target.value})}
                type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
            </div>

            <div class="input-group">
                <span class="input-group-text">Текст</span>
                <textarea value={post.body} onChange={e => setPost({...post, body: e.target.value})}
                class="form-control" aria-label="With textarea"></textarea>
            </div>
            <Button onClick={addPost}>Создать пост</Button>
            </form>
     );
}

export default PostForm;