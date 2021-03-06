import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRouter = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Switch>
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Route exact path="/hero/:heroId" component={HeroScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
