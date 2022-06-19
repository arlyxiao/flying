import React, { useState } from 'react';

import { AuthTemplate } from '../../templates/Auth'

export const Register = (props) => {
  const { title } = props;

  return (
    <AuthTemplate>
      <p>
      Register:{title} 

      </p>
    </AuthTemplate>
  )
}
