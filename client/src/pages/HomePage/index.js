import React from 'react'

import Directory from 'components/Directory'

import './style.scss'

export default () => (
  <div className='homepage'>
    <React.Profiler
      id='Directory'
      onRender={(id, phase, actualDuration) => {
        console.log(id, phase, actualDuration)
      }}
    >
      <Directory />
    </React.Profiler>
  </div>
)
