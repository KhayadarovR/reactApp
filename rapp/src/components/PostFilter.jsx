import React from 'react';
import Select from './UI/Select';


function PostFilter({filter, setFilter}) {
    return ( 
        <div>
            <input 
                className='form-control form-control-lg'
                type="text" 
                placeholder='Поиск'
                value={filter.query}
                onChange={(e) => setFilter({...filter, query: e.target.value})}
            />
        </div>
    );
}

export default PostFilter;