import React from 'react';
import ReactDOM from 'react-dom';
import styles from './main.module.css'
class Main extends React.Component{
      render(){
          return <div className={styles.myStyle}>Основная информация</div>;
      }
  }

export default Main;
