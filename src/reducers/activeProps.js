import * as activePropsActions from '../actions/activeProps'

const initialState = {
  watchedIntroPlayback: false
}

const reducer = (state = initialState, action) => {
  const { type } = action

  switch (type) {
    case activePropsActions.WATCH_INTROPLAYBACK: {
      return {
        ...state,
        watchedIntroPlayback: true
      }
    }
    default:
      return state
  }
}

export default reducer
