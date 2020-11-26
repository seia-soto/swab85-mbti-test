export const WATCH_INTROPLAYBACK = 'activeProps/watchIntroPlayback'
export const SCORE_TEST = 'activeProps/scoreTest'

export const markIntroPlaybackAsWatched = () => ({
  type: WATCH_INTROPLAYBACK
})
export const scoreTest = (tense, score) => ({
  type: SCORE_TEST,
  payload: {
    tense,
    score
  }
})
