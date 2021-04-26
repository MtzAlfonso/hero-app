import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router';
import { heroesImages } from '../../helpers/heroesImages';
import { getHeroById } from '../../selectors/getHeroById';


export const HeroScreen = ({ history }) => {
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const handleBack = () =>
    history.length <= 2 ? history.push('/') : history.goBack();

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  return (
    <>
      <h1>{superhero}</h1>
      <div className="row mb-5 align-items-center animate__animated animate__fadeIn">
        <div className="col-12 col-md-3">
          <img
            className="img-fluid img-thumbnail animate__animated animate__fadeInLeft"
            src={heroesImages(`./${heroId}.jpg`).default}
            alt={superhero}
          />
        </div>
        <div className="col-12 col-md-9">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="font-weight-bold">Publisher: </span>
              <span className="font-italic ml-3">{publisher}</span>
            </li>
            <li className="list-group-item">
              <span className="font-weight-bold">Alter ego: </span>
              <span className="font-italic ml-3">{alter_ego}</span>
            </li>
            <li className="list-group-item">
              <span className="font-weight-bold">First appearance: </span>
              <span className="font-italic ml-3">{first_appearance}</span>
            </li>
            <li className="list-group-item">
              <span className="font-weight-bold">Characters: </span>
              <span className="font-italic ml-3">{characters}</span>
            </li>
          </ul>
          <button
            className="btn btn-outline-secondary btn-sm mt-4"
            onClick={handleBack}
          >
            <i className="fas fa-arrow-left"></i> back
          </button>
        </div>
      </div>
    </>
  );
};
