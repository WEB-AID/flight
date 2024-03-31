import { FC } from 'react';

import img from '../../assets/plane.gif';

import styles from './ErrorPage.module.scss';

const { error } = styles;

const ErrorPage: FC = () => {
  return (
    <div className={error}>
      <span>Нет подходящих рейсов...</span>
      <img src={img} alt="Error Page SVG" />
    </div>
  );
};

export default ErrorPage;
