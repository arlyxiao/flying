import React, { useState } from 'react';
import { AuthTemplate } from '../../templates/Auth'

export const Login = (props) => {
  return (
    <AuthTemplate>
      Login: {props.title}
    </AuthTemplate>
  )
}
