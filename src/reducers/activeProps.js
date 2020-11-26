import * as activePropsActions from '../actions/activeProps'

const initialState = {
  watchedIntroPlayback: false,
  mbtiScores: {
    attensionFocused: 0, // NOTE: E <-> I
    recognitionFunction: 0, // NOTE: S <-> N
    judgmentFunction: 0, // NOTE: T <-> F
    lifeStyle: 0 // NOTE: J <-> P
  }
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case activePropsActions.WATCH_INTROPLAYBACK: {
      return {
        ...state,
        watchedIntroPlayback: true
      }
    }
    case activePropsActions.SCORE_TEST: {
      const newState = { ...state }

      // NOTE: update mbti scores;
      newState.mbtiScores[payload.tense] += payload.score

      return newState
    }
    default:
      return state
  }
}

export default reducer
