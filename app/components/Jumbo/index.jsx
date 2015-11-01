import React from 'react';
import styles from './style';
import Blur from 'react-blur';
import Image from './images/img.jpg';

export default class Jumbo extends React.Component {
    render() {
        return <div>
            <Blur img={Image} blurRadius={8} className={styles.main}></Blur>
            <div className={styles.title}>AURORA</div>
        </div>;
    }
}
