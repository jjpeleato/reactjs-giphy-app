import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = (event) => {
        const { target } = event;
        const { value } = target;

        setInputValue(value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const value = inputValue.trim();

        if (value.length <= 1) {
            return;
        }

        onAddCategory(value);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit} aria-label='form'>
            <input
                type="text"
                placeholder="Search gifs..."
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired,
}
