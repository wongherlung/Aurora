import React from 'react';
import styles from './style';
import Blur from 'react-blur';
import Image from './images/img2.jpg';

export default class Jumbo extends React.Component {
    render() {
        return <div>
            <Blur img={Image} blurRadius={20} className={styles.main}></Blur>
            <div className={styles.title}>a u r o r a</div>
        </div>;
    }
}
