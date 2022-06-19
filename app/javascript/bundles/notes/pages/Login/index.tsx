import React, { useState } from 'react';
import { AuthTemplate } from '../../templates/Auth'
import styles from './styles.module.css';


export const Login = (props) => {
  return (
    <AuthTemplate>
      <p className={styles.demo}>
      Login: {props.title}

      </p>
    </AuthTemplate>
  )
}
