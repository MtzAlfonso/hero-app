import React, { useMemo } from 'react';
import { default as qs } from 'query-string';
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { heroes } from '../../data/heroes';

export const SearchScreen = ({ history }) => {
  const { search } = useLocation();
  const { q: searchText = '' } = useMemo(() => qs.parse(search), [search]);

  const [formValues, handleInputChange] = useForm({
    searchInput: searchText,
  });

  const { searchInput } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchInput.trim()}`);
  };

  const heroFiltered = useMemo(
    () => (searchText === '' ? heroes : getHeroesByName(searchText)),
    [searchText]
  );

  return (
    <>
      <h1>Search</h1>
      <div className="row">
        <div className="col-12">
          <form onSubmit={handleSearch} className="form-row align-items-center">
            <div className="col-12 col-lg-10">
              <input
                autoComplete="off"
                name="searchInput"
                type="text"
                className="form-control"
                placeholder="Find your favorite hero"
                onChange={handleInputChange}
                value={searchInput}
              />
            </div>
            <div className="col-12 col-lg-2 mt-3 mt-lg-0">
              <button type="submit" className="btn btn-success btn-block">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="col-12 mt-4">
          {heroFiltered.length === 0 && (
            <div className="alert alert-info">Your hero not was found 😢</div>
          )}

          <div className="row row-cols-2 align-items-baseline">
            {heroFiltered.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
