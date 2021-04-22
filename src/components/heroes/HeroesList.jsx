import React from 'react';
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher';
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {
  const heroes = getHeroByPublisher(publisher);

  return (
    <div className="row row-cols-2 mt-4 align-items-center">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
