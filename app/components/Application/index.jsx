import React from 'react';
import Header from '../Header';
import Jumbo from '../Jumbo';
import Card from '../Card';
import styles from './style';

export default class Application extends React.Component {
  render() {
    return <div className={styles.main}>
      <div className={styles.wrap}>
        <Jumbo />
        <Header />

        <main className="row main-body">
          <Card />
          <Card />
          <Card />
        </main>
      </div>
    </div>;
  }
}
