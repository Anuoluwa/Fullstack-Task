import React, { useState, useEffect } from 'react';
import DropdownList from "react-widgets/lib/DropdownList";

import { listAuthors } from '../../services/authors';

function AuthorDropdown({ value, onChange }) {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const fetchAuthors = async () => {
            const data = await listAuthors();
            data.unshift({ id: null ,firstName: 'None', lastName: ''});
            setAuthors(data.map((author) => ({...author, fullName: `${author.firstName} ${author.lastName}`}) ))
        };
        fetchAuthors();
    }, []);


    return (
        <div className="AuthorDropdown">
            { console.log(authors, 'kik')}
            <DropdownList
                value={ value }
                datakey="id"
                defaultValue={ authors[0]}
                data={ authors }
                textField= "fullName"
                valueField="id"
                onChange={ onChange }
                allowCreate={ false }
            />
        </div>
    );
}

export default AuthorDropdown;
