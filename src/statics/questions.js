export default [
  {
    question: '어떤 플랫폼에서 방송을 즐겨보시나요?',
    answers: [
      {
        text: 'YouTube에서 10분만!',
        scores: {
          judgmentFunction: 1
        }
      },
      {
        text: 'Twitch에서 생방송을!',
        scores: {
          judgmentFunction: -1
        }
      }
    ]
  }
]
