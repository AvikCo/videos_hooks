import React,{ useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
const [term, setTerm] = useState('');

const onFormChange=(event)=>{
    event.preventDefault()
    onFormSubmit(term);
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormChange}>
                <div className="field">
                <div className="ui action input">
                 <input type="text" placeholder="Search..." 
                        value={term}
                        onChange={(event)=>setTerm(event.target.value)}
                    />
                    <button className="ui button" onClick={onFormChange}>Search Video</button>
                    </div>
                </div>
            </form>
        </div>

    )

}

export default SearchBar;