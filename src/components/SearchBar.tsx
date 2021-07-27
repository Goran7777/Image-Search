import React, { useState, useRef } from 'react';

import './SearchBar.scss';

interface IProps {
  onSubmit: (term: string) => void;
}

const SearchBar = ({ onSubmit }: IProps) => {
  const [term, setTerm] = useState('');
  const focusRef = useRef(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(term);
    setTerm('');
    focusRef.current.blur();
  };
  return (
    <div className="search">
      <form className="search--form" onSubmit={submitHandler}>
        <label className="search--form-label" htmlFor="image">
          Image Search
        </label>
        <input
          id="image"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="search--form-input"
          type="text"
          ref={focusRef}
        />
      </form>
    </div>
  );
};

export default SearchBar;
