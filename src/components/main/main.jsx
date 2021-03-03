import React from 'react';
import ReactDOM from 'react-dom';
import styles from './main.module.scss';

class Main extends React.Component{
      render(){
          return <div className={styles.myStyle}><div>test</div>Основная информация</div>;
      }
  }

export default Main;
