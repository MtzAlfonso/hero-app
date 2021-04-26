import React from 'react';
import { Link } from 'react-router-dom';
import { heroesImages } from '../../helpers/heroesImages';

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="col mb-4">
      <div className="card border-0 bg-light animate__animated animate__fadeIn">
        <div className="row no-gutters">
          <div className="col-12 col-lg-4">
            <img
              src={heroesImages(`./${id}.jpg`).default}
              alt={superhero}
              className="card-img h-100"
            />
          </div>
          <div className="col-12 col-lg-8">
            <div className="card-body">
              <h4 className="card-title">{superhero}</h4>
              <p className="card-text">{alter_ego}</p>
              <p className="card-text text-muted font-italic">
                {first_appearance}
              </p>
              {alter_ego !== characters && (
                <p className="card-text">
                  <span className="small">{characters}</span>
                </p>
              )}
              <Link
                to={`./hero/${id}`}
                className="btn btn-outline-secondary px-4 btn-sm mt-5"
              >
                More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
