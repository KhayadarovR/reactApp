import React from 'react';
import { getPagesArray } from '../utils/page';

function Pagenations({totalPages, page, changePage}) {
    let pageArray = getPagesArray(totalPages);
    return ( 
        <div>
                {pageArray.map((p) => 
                <button 
                    key={p} 
                    className={page === p ? 'btn btn-warning m-1' : ' m-1 btn btn-primary'}
                    onClick={() => changePage(p)}
                    >{p}</button>
            )}
        </div>
     );
}

export default Pagenations;