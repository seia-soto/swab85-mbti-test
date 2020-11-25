import React from 'react'
import PropTypes from 'prop-types'

import { css } from 'glamor'

const RootComponent = props => {
  const styles = css({
    background: 'black',
    height: '100vh'
  })

  return (
    <div {...styles}>
      {props.children}
    </div>
  )
}

RootComponent.propTypes = {
  children: PropTypes.any
}

export default RootComponent
