import React from 'react';
import styles from './style';
import classNames from 'classnames';

export default class Card extends React.Component {
    render() {
        var cardClass = classNames({
            'col-md-4': true,
            'col-sm-6': true,
            'card-container': true
        });
        return <div className={cardClass}>
            <div className="card-inner-container">

            </div>
        </div>;
    }
}
