import React from 'react';

function Select({options, defaultValue, value, onChange}) {


    return ( 
            <select className='form-control' value={value} onChange={(e) => onChange(e.target.value)}>
                <option disabled value=''>{defaultValue}</option>
                {options.map(o => 
                    <option key={o.value} value={o.value}>
                        {o.name}
                        </option>
                )}
            </select>
     );
}

export default Select;