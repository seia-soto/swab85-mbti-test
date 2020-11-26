export default [
  {
    question: '어떤 플랫폼에서 방송을 즐겨보시나요?',
    answers: [
      {
        text: 'YouTube에서 10분만!',
        action: {
          tense: 'judgmentFunction',
          score: -1.1
        }
      },
      {
        text: 'Twitch에서 생방송을!',
        action: {
          tense: 'judgmentFunction',
          score: 2
        }
      }
    ]
  },
  {
    question: '어떤 방송을 더 좋아하시나요?',
    answers: [
      {
        text: '역시 근본 요리 방송!',
        action: {
          tense: 'recognitionFunction',
          score: -1.5
        }
      },
      {
        text: '뭐래~ 우리 승빠는 게임 방송 더 많이 하거든?',
        action: {
          tense: 'recognitionFunction',
          score: 1.2
        }
      }
    ]
  }
]
