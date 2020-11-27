import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { css } from 'glamor'
import { motion } from 'framer-motion'
import {
  Button,
  Container,
  Editable,
  EditablePreview,
  EditableInput,
  Heading,
  Text,
  Tooltip
} from '@chakra-ui/react'

import Header from '../components/Header'

// NOTE: images;
import father1 from '../images/father-1.png'

const WelcomePage = props => {
  const [visible, setVisible] = useState(0)
  const { watchedIntroPlayback } = useSelector(states => states.activeProps)
  const history = useHistory()
  const styles = {
    background: css({
      backgroundImage: `linear-gradient(to bottom, #000000 35px, transparent), url(${father1})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',

      minHeight: '100vh'
    }),
    motionWrapper: css({
      opacity: 0
    }),
    centeredText: {
      textAlign: 'center'
    },
    headingText: {
      maxWidth: '100vw',
      wordBreak: 'keep-all'
    },
    descriptionText: {
      paddingTop: '15px',
      wordBreak: 'keep-all'
    },
    actionButton: {
      marginTop: '50px'
    }
  }

  useEffect(() => {
    if (!watchedIntroPlayback) {
      history.push('/intro')
    }

    setTimeout(() => setVisible(1), 1 * 1000)
  }, [])

  return (
    <motion.div
      animate={visible ? 'visible' : 'invisible'}
      variants={{
        visible: {
          opacity: 1
        },
        invisible: {
          opacity: 0
        }
      }}
      {...styles.motionWrapper}
    >
      <div {...styles.background}>
        <Header />
        <Container centerContent>
          <Editable defaultValue='"처신 잘하라고~"'>
            <Heading as='h1' size='2xl' color='gray.200' css={styles.headingText} isTruncated>
              <Tooltip hasArrow label='대사를 수정할 수 있어요!' bg='gray.300' color='black'>
                <EditablePreview css={{ ...styles.centeredText }} />
              </Tooltip>
              <EditableInput css={{ ...styles.centeredText }} />
            </Heading>
          </Editable>
          <Text color='gray.300' css={{ ...styles.descriptionText, ...styles.centeredText }}>
            여러분은 어떤 타입으로 '볶'을 수 있는지 알아보세요!
          </Text>
          <Button
            colorScheme='teal'
            size='lg'
            css={styles.actionButton}
            onClick={event => {
              setVisible(0)

              setTimeout(() => {
                history.push('/test')
              }, 1 * 1000)
            }}
          >
            시작하기
          </Button>
        </Container>
      </div>
    </motion.div>
  )
}

export default WelcomePage
