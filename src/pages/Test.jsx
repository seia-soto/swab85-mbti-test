import React, { useState, useEffect } from 'react'

import { css } from 'glamor'
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

// NOTE: images;
import father1 from '../images/father-1.png'

// NOTE: questions;
import questions from '../statics/questions'

const TestPage = props => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
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
    }
  }

  useEffect(() => {}, [])

  return (
    <>
      <div {...styles.background}>
        <Header />
        <Container maxW='200px'>
          <Progress
            size='xs'
            min={1}
            max={questions.length}
            value={currentQuestion}
            colorScheme='green'
            isAnimated
          />
        </Container>
        <Container centerContent css={styles.contentWrapper}>
          <Heading as='h1' size='xl' color='gray.200'>
            {questions[currentQuestion].question}
          </Heading>
          <Stack spacing={4} css={styles.actionGroup}>
            {
              questions[currentQuestion].answers.map((answer, key) => {
                return (
                  <Button
                    key={`swab-mbti.test.answer-${currentQuestion}-${key}`}
                    rightIcon={<FaArrowRight />}
                    colorScheme='green'
                  >
                    {answer.text}
                  </Button>
                )
              })
            }
          </Stack>
        </Container>
      </div>
    </>
  )
}

export default TestPage
