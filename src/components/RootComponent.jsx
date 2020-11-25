import React from 'react'
import PropTypes from 'prop-types'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { css } from 'glamor'

import configureStore from '../store'

const { store, persistor } = configureStore()

const RootComponent = props => {
  const styles = css({
    background: 'black',
    height: '100vh'
  })

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div {...styles}>
          {props.children}
        </div>
      </PersistGate>
    </Provider>
  )
}

RootComponent.propTypes = {
  children: PropTypes.any
}

export default RootComponent
