import React from 'react';
import styles from './style';
import Sticky from 'react-sticky'

export default class Header extends React.Component {
  render() {
    return <Sticky>
      <div className={styles.main}>
        <div className="header-item">Fashion</div>
        <div className="header-item">Craft</div>
      </div>
    </Sticky>;
  }
}
