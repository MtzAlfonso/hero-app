import React from 'react';
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher';

export const HeroesList = ({ publisher }) => {
  const heroes = getHeroByPublisher(publisher);

  return (
    <ul>
      {heroes.map(({ id, superhero }) => (
        <li key={id}>{superhero}</li>
      ))}
    </ul>
  );
};
