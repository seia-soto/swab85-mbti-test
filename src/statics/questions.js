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
          score: 1.1
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
  },
  {
    question: '승우아빠를 본다면?',
    answers: [
      {
        text: '지금 상황에 어딜가? 방콕으로 랜선 파티나 하자.',
        action: {
          tense: 'judgmentFunction',
          score: -1.6
        }
      },
      {
        text: '일단 만나고 보는거다, 승우아빠.',
        action: {
          tense: 'judgmentFunction',
          score: 1.4
        }
      }
    ]
  },
  {
    question: '이성친구에게 줄 초콜릿은?',
    answers: [
      {
        text: '사먹을래요.',
        action: {
          tense: 'lifeStyle',
          score: -0.9
        }
      },
      {
        text: '배달시켜 먹을래요.',
        action: {
          tense: 'lifeStyle',
          score: -1.1
        }
      },
      {
        text: '만들어 먹을래요!',
        action: {
          tense: 'lifeStyle',
          score: 1.1
        }
      },
      {
        text: '승우아빠 레시피로 만들어 먹어야지~',
        action: {
          tense: 'lifeStyle',
          score: 1.3
        }
      }
    ]
  },
  {
    question: '야,,, 야, 야, 길가다가 승우아빠를 본 것 같아!',
    answers: [
      {
        text: '어? 맞네. 일단 가서 물어보자',
        action: {
          tense: 'attensionFocused',
          score: -1.2
        }
      },
      {
        text: '혹시 몰라,,, 나 찍히는거 아닌가? 잘못 고르면...',
        action: {
          tense: 'attensionFocused',
          score: 1.2
        }
      }
    ]
  },
  {
    question: '승우아빠에게 선물을 한다면?',
    answers: [
      {
        text: '리뷰할 라면',
        action: {
          tense: 'attensionFocused',
          score: -1.2
        }
      },
      {
        text: '영국 음식',
        action: {
          tense: 'attensionFocused',
          score: 1.2
        }
      },
      {
        text: '국밥',
        action: {
          tense: 'attensionFocused',
          score: -0.9
        }
      },
      {
        text: '치킨',
        action: {
          tense: 'attensionFocused',
          score: 0.9
        }
      }
    ]
  },
  {
    question: '나의 이상형 셰프는?',
    answers: [
      {
        text: '목진화 셰프',
        action: {
          tense: 'judgmentFunction',
          score: -1.2
        }
      },
      {
        text: '볶진화 셰프',
        action: {
          tense: 'judgmentFunction',
          score: 1.2
        }
      },
      {
        text: '승우 아빠',
        action: {
          tense: 'judgmentFunction',
          score: 0
        }
      },
      {
        text: '자비스',
        action: {
          tense: 'judgmentFunction',
          score: 0.2
        }
      }
    ]
  },
  {
    question: '승우아빠는?',
    answers: [
      {
        text: '요리사이다',
        action: {
          tense: 'recognitionFunction',
          score: 1.4
        }
      },
      {
        text: '스트리머이다',
        action: {
          tense: 'recognitionFunction',
          score: -1.4
        }
      }
    ]
  }
]
