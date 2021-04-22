import { heroes } from '../data/heroes';

export const getHeroByPublisher = (publisher) => {
  const validPublisher = ['Marvel Comics', 'DC Comics'];

  if (validPublisher.includes(publisher)) {
    return heroes.filter((hero) => hero.publisher === publisher);
  } else {
    throw new Error(`Publisher "${publisher}" not found`);
  }
};
