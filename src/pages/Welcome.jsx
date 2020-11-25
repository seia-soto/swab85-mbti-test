import React, { useState, useEffect } from 'react'

import { css } from 'glamor'
import { motion } from 'framer-motion'
import {
  Button,
  Container,
  Editable,
  EditablePreview,
  EditableInput,
  Heading,
  Tooltip
} from '@chakra-ui/react'

import Header from '../components/Header'

// NOTE: images;
import father1 from '../images/father-1.png'

const WelcomePage = props => {
  const [visible, setVisible] = useState(0)
  const styles = {
    background: css({
      backgroundImage: `linear-gradient(to bottom, #000000 35px, transparent), url(${father1})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',

      height: '100vh'
    }),
    motionWrapper: css({
      opacity: 0
    }),
    centeredText: {
      textAlign: 'center'
    },
    headingText: {
      maxWidth: '100vw',
      paddingBottom: '50px',
      wordBreak: 'keep-all'
    }
  }

  useEffect(() => {
    setTimeout(() => setVisible(1), 0.45 * 1000)
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
            <Heading as='h1' size='2xl' css={styles.headingText} isTruncated>
              <Tooltip hasArrow label='대사를 수정할 수 있어요!' bg='gray.300' color='black'>
                <EditablePreview css={styles.centeredText} />
              </Tooltip>
              <EditableInput css={styles.centeredText} />
            </Heading>
          </Editable>
          <Button colorScheme='teal' size='lg'>
            시작하기
          </Button>
        </Container>
      </div>
    </motion.div>
  )
}

export default WelcomePage
