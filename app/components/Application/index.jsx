import React from 'react';
import Header from '../Header';
import Jumbo from '../Jumbo';
import styles from './style';

export default class Application extends React.Component {
  render() {
    return <div className={styles.main}>
      <div className={styles.wrap}>
        <Jumbo />
        <Header />

        <main className={styles.body}>
          <p>Seems like creating your own React starter kit is a right of passage. So, here's mine.</p>
          <p>For more information, see the <a href="https://github.com/bradleyboy/yarsk#yarsk">Readme</a>.</p>
        </main>
      </div>
    </div>;
  }
}
