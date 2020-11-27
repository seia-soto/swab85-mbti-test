import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { css } from 'glamor'
import { motion } from 'framer-motion'
import {
  Button,
  Container,
  Heading,
  Progress,
  Stack
} from '@chakra-ui/react'
import {
  FaArrowRight
} from 'react-icons/fa'

import Header from '../components/Header'

import * as activePropsActions from '../actions/activeProps'

// NOTE: images;
import father1 from '../images/father-1.png'

// NOTE: questions;
import questions from '../statics/questions'

const TestPage = props => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0])
  const [visible, setVisible] = useState(1)
  const [isIndeterminate, setIsIndeterminate] = useState(false)
  const { watchedIntroPlayback, mbtiScores } = useSelector(states => states.activeProps)
  const dispatch = useDispatch()
  const history = useHistory()
  const styles = {
    background: css({
      backgroundImage: `linear-gradient(to bottom, #000000 35px, transparent), url(${father1})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',

      height: '100vh'
    }),
    actionGroup: {
      padding: '75px 0'
    },
    contentWrapper: {
      paddingTop: '55px',
      textAlign: 'center',
      wordBreak: 'keep-all'
    },
    motionContainer: css({
      opacity: 0,
      pointerEvents: 'none'
    })
  }

  const currentQuestionIndex = currentQuestion.index || 0

  useEffect(() => {
    if (!watchedIntroPlayback) {
      history.push('/intro')
    }
  }, [])

  return (
    <>
      <div {...styles.background}>
        <Header />
        <Container maxW='200px'>
          <Progress
            size='xs'
            min={0}
            max={questions.length - 1}
            value={currentQuestionIndex}
            colorScheme='green'
            isAnimated
            isIndeterminate={isIndeterminate}
          />
        </Container>
        <motion.div
          animate={visible ? 'visible' : 'invisible'}
          transition={{
            duration: 0.5
          }}
          variants={{
            visible: {
              opacity: 1,
              pointerEvents: 'auto'
            },
            invisible: {
              opacity: 0,
              pointerEvents: 'none'
            }
          }}
          {...styles.motionContainer}
        >
          <Container centerContent css={styles.contentWrapper}>
            <Heading as='h1' size='xl' color='gray.200'>
              {currentQuestion.question}
            </Heading>
            <Stack spacing={4} css={styles.actionGroup}>
              {
                currentQuestion.answers.map((answer, key) => {
                  return (
                    <Button
                      key={`swab-mbti.test.answer-${currentQuestionIndex}-${key}`}
                      rightIcon={<FaArrowRight />}
                      colorScheme='green'
                      onClick={event => {
                        // NOTE: return to initial state if the index of the question is 0;
                        if (!currentQuestionIndex) {
                          dispatch(activePropsActions.scoreTest('attensionFocused', -mbtiScores.attensionFocused))
                          dispatch(activePropsActions.scoreTest('recognitionFunction', -mbtiScores.recognitionFunction))
                          dispatch(activePropsActions.scoreTest('judgmentFunction', -mbtiScores.judgmentFunction))
                          dispatch(activePropsActions.scoreTest('lifeStyle', -mbtiScores.lifeStyle))
                        }

                        dispatch(activePropsActions.scoreTest(answer.action.tense, answer.action.score))
                        setVisible(0)

                        setTimeout(() => {
                          if (currentQuestionIndex !== questions.length - 1) { // NOTE: navigate to next question;
                            const newQuestionIndex = currentQuestionIndex + 1
                            const newQuestion = questions[newQuestionIndex]

                            newQuestion.index = newQuestionIndex

                            setCurrentQuestion(newQuestion)
                            setVisible(1)
                          } else { // NOTE: calculate the result and redirect to the result page;
                            let result = ''

                            if (mbtiScores.attensionFocused > 0) {
                              result += 'I'
                            } else {
                              result += 'E'
                            }
                            if (mbtiScores.recognitionFunction > 0) {
                              result += 'N'
                            } else {
                              result += 'S'
                            }
                            if (mbtiScores.judgmentFunction > 0) {
                              result += 'F'
                            } else {
                              result += 'T'
                            }
                            if (mbtiScores.lifeStyle > 0) {
                              result += 'P'
                            } else {
                              result += 'J'
                            }

                            // NOTE: add loading animation;
                            setCurrentQuestion({
                              question: '승빠랑 들들 볶는 중...',
                              answers: []
                            })
                            setIsIndeterminate(true)
                            setVisible(true)

                            setTimeout(() => {
                              setVisible(false)

                              setTimeout(() => history.push('/result/' + result), 0.5 * 1000)
                            }, 3 * 1000)
                          }
                        }, 0.5 * 1000)
                      }}
                    >
                      {answer.text}
                    </Button>
                  )
                })
              }
            </Stack>
          </Container>
        </motion.div>
      </div>
    </>
  )
}

export default TestPage
