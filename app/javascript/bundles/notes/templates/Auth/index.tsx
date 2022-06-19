import React, { useState } from 'react';

export const AuthTemplate = ({ children }) => {
  return (
    <div className="auth-template">
      Hello, this is auth template
      
      {children}
    </div>
  )
}