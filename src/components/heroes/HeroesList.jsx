import React, { useMemo } from 'react';
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher';
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
    <div className="row row-cols-2 mt-4 align-items-baseline animate__fadeInLeft">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
