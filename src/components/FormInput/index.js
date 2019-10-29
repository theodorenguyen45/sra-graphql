import React from 'react'

import './style.scss'

const FormInput = ({ label, value, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' {...otherProps} />
    {label ? (
      <label
        className={`${value ? 'shrink' : ''} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
)

export default FormInput
