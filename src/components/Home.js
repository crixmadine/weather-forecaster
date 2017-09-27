import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Divider from 'react-md/lib/Dividers';

import '../assets/stylesheets/Home.scss';

const Home = props => {
  return (
    <Card className="card">
      <CardTitle title="Weather Forecast App" />
      <Divider />
      <CardText>

        <div className="home__feature-title">Test</div>

      </CardText>
    </Card>
  );
};

export default Home;
