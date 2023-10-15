'use client';

import { useState, ChangeEvent } from 'react';
import Autosuggest from 'react-autosuggest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

const product = [
  {
    thumbnail: 'paroc-rockwool.jpg',
    name: 'Paroc Rockwool',
    price: '$499.00',
    url: '/',
  },
];

const getSuggestions = (value: string) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : product.filter((prod) =>
        prod.name
          .toLowerCase()
          .split(' ')
          .some((word) => word === inputValue)
      );
};

const getSuggestionValue = (suggestion: { name: string }) => suggestion.name;

const renderSuggestion = (suggestion: {
  thumbnail: string;
  name: string;
  price: string;
  url: string;
}) => (
  <Link
    href={suggestion.url}
    className='inline-block w-full cursor-pointer px-2 pb-1 pt-2 text-right text-black'
  >
    <span className='float-left m-1 block h-12 w-12 overflow-hidden rounded-none border-0 p-0 text-center'>
      <Image
        src={`/${suggestion.thumbnail}`}
        alt={suggestion.name}
        width='50'
        height='50'
      />
    </span>
    <span className='float-left w-80 overflow-hidden text-ellipsis whitespace-nowrap pl-1 text-left'>
      {suggestion.name}
    </span>
    <span className='pl-1'>{suggestion.price}</span>
  </Link>
);

const Search = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState<
    { thumbnail: string; name: string; price: string; url: string }[]
  >([]);

  const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onChange = (event: any, { newValue }: { newValue: any }) => {
    setValue(newValue);
  };

  const inputProps = {
    placeholder: 'Search a product',
    value: value,
    onChange: onChange,
  };

  return (
    <>
      <div className='relative flex w-full flex-wrap items-stretch'>
        <div className='border-box relative w-full'>
          <div className='relative flex h-11 w-full items-center rounded-lg'>
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
            />
            <div className='color-[#6c757d] absolute right-0 flex h-11 w-14 items-center justify-center'>
              <FontAwesomeIcon
                icon={faSearch}
                style={{ color: '#6c757d', height: '18px', width: '18px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
