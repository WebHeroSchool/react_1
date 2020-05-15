import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ count }) => (<p className={styles.text}>Вот сколько дел еще осталось сделать: { count }</p>);
 
 export default Footer;
