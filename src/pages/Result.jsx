import React, { useState, useEffect } from 'react'

import { useHistory, useParams } from 'react-router-dom'
import { css } from 'glamor'
import {
  Button,
  Code,
  Container,
  Heading,
  Image,
  Text,
  List,
  ListItem,
  Stack,
  useToast,
  useClipboard
} from '@chakra-ui/react'
import {
  FaShare,
  FaRedo
} from 'react-icons/fa'

import Header from '../components/Header'

// NOTE: images;
import fatherLogo from '../images/father-logo.png'
import father2 from '../images/father-2.png'
import father3 from '../images/father-3.png'
import father4 from '../images/father-4.png'
import father5 from '../images/father-5.png'
import father6 from '../images/father-6.png'
import father7 from '../images/father-7.png'
import father8 from '../images/father-8.png'
import father9 from '../images/father-9.png'
import father10 from '../images/father-10.png'
import father11 from '../images/father-11.png'
import father12 from '../images/father-12.png'
import father13 from '../images/father-13.png'
import father14 from '../images/father-14.png'
import father15 from '../images/father-15.png'
import father16 from '../images/father-16.png'
import father17 from '../images/father-17.png'

// NOTE: results;
import results from '../statics/results'

const ResultPage = props => {
  const [image, setImage] = useState(null)
  const history = useHistory()
  const { code: mbti } = useParams()
  const toast = useToast()
  const { onCopy } = useClipboard(window.location.href)
  const styles = {
    background: css({
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.78) 100%, transparent), url(${image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',

      minHeight: '100vh'
    }),
    featuredImage: {
      marginBottom: '15px'
    },
    centeredText: {
      textAlign: 'center'
    },
    descriptionText: {
      paddingTop: '15px',
      wordBreak: 'keep-all'
    },
    featurings: {
      margin: '45px 0',
      wordBreak: 'keep-all'
    },
    actionGroup: {
      margin: '45px 0'
    },
    referGroup: {
      margin: '25px 0',
      wordBreak: 'keep-all'
    }
  }

  const result = results[mbti] || {
    title: mbti,
    description: '아직 준비 중!',
    features: [],
    image: 0
  }
  const images = [
    father2,
    father3,
    father4,
    father5,
    father6,
    father7,
    father8,
    father9,
    father10,
    father11,
    father12,
    father13,
    father14,
    father15,
    father16,
    father17
  ]

  useEffect(() => {
    setImage(images[result.image])
  }, [])

  if (!result) {
    history.push('/')

    return null
  }

  return (
    <div {...styles.background}>
      <Header />
      <Container centerContent>
        <Image
          src={fatherLogo}
          borderRadius='full'
          boxSize='150px'
          css={styles.featuredImage}
        />
        <Code fontSize='md'>{mbti}</Code>
        <Text color='gray.300' css={{ ...styles.descriptionText, ...styles.centeredText }}>
          {result.description}
        </Text>
        <Heading as='h1' size='xl' color='gray.200'>
          {result.title}
        </Heading>
        <List color='gray.200' css={{ ...styles.featurings, ...styles.centeredText }}>
          {
            result.features.map((feature, key) => {
              return (
                <ListItem key={`swab-mbti.result.${mbti}-${key}`}>{feature}</ListItem>
              )
            })
          }
        </List>
        <Stack spacing={4} css={styles.actionGroup}>
          <Button
            colorScheme='blue'
            leftIcon={<FaShare />}
            onClick={() => {
              onCopy()

              toast({
                title: '링크 복사됨',
                description: '현재 웹 사이트의 링크가 클립보드로 복사되었습니다.',
                isClosable: true
              })
            }}
          >
            테스트 결과 공유하기
          </Button>
          <Button
            leftIcon={<FaRedo />}
            onClick={() => {
              history.push('/')
            }}
          >
            테스트 다시하기
          </Button>
        </Stack>
      </Container>
    </div>
  )
}

export default ResultPage
