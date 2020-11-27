import React from 'react'

import { useHistory, useParams } from 'react-router-dom'
import { css } from 'glamor'
import {
  Button,
  Code,
  Container,
  Heading,
  Image,
  Text,
  UnorderedList,
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

// NOTE: results;
import results from '../statics/results'

const ResultPage = props => {
  const history = useHistory()
  const { code: mbti } = useParams()
  const toast = useToast()
  const { onCopy } = useClipboard(window.location.href)
  const styles = {
    background: css({
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.78) 100%, transparent), url(${father2})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',

      height: '100vh'
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
      margin: '45px 0'
    },
    actionGroup: {
      margin: '45px 0'
    }
  }

  const result = results[mbti]

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
        <UnorderedList color='gray.200' css={styles.featurings}>
          {
            result.features.map((feature, key) => {
              return (
                <ListItem key={`swab-mbti.result.${mbti}-${key}`}>{feature}</ListItem>
              )
            })
          }
        </UnorderedList>
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
