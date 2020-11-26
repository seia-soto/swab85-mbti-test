import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { css } from 'glamor'
import { motion } from 'framer-motion'
import YouTubePlayer from 'youtube-player'

import * as activePropsActions from '../actions/activeProps'

const IntroPlaybackPage = props => {
  const [visible, setVisible] = useState(0)
  const { watchedIntroPlayback } = useSelector(states => states.activeProps)
  const dispatch = useDispatch()
  const history = useHistory()
  const toast = useToast()
  const styles = {
    motionContainer: css({
      opacity: 0
    }),
    wrapper: css({
      width: '100vw',
      height: '100vh',
      margin: 0,
      pointerEvents: 'none'
    }),
    skipContainer: css({
      textAlign: 'center',
      padding: '8px 0',
      paddingTop: '35px',
      width: '100vw',
      zIndex: 2,
      position: 'absolute'
    }),
    skipAction: css({
      color: 'white',
      fontWeight: 700,
      padding: '12px',
      background: 'black',
      borderRadius: '10px'
    })
  }
  const videoStates = {
    '-1': 'unstarted',
    0: 'ended',
    1: 'playing',
    2: 'paused',
    3: 'buffering',
    5: 'video-cued'
  }
  const videoQualities = {
    small: '240p',
    medium: '360p',
    large: 'SD',
    hd720: 'HD',
    hd1080: 'FHD',
    highres: 'FHD+'
  }

  useEffect(() => {
    if (watchedIntroPlayback) {
      history.push('/')
    }

    // NOTE: Mark IntroPlayback as watched right after user sees the screen to allow skipping video immediately.
    dispatch(activePropsActions.markIntroPlaybackAsWatched())

    const player = YouTubePlayer('yt-v-dTweOZwvTKk', {
      videoId: 'dTweOZwvTKk',
      width: '100%',
      height: '100%',
      playerVars: {
        cc_load_policy: 0,
        controls: 0,
        disablekb: 1,
        enablejsapi: 1,
        end: 15,
        fs: 0,
        iv_load_policy: 3,
        loop: 0,
        modestbranding: 0,
        playsinline: 1,
        start: 8,
        autoplay: 1,
        mute: 1,
        vq: 'hd1080'
      }
    })

    player.setPlaybackQuality('hd1080')

    player.on('ready', () => {
      setVisible(1)

      toast({
        title: '동영상 준비 중',
        description: '동영상이 즉시 재생되지 않는 경우 웹 페이지를 새로고침 해주세요. 모바일에서는 YouTube 정책에 의해 작동하지 않습니다.',
        isClosable: true
      })
    })
    player.on('stateChange', event => {
      const state = videoStates[event.data]

      switch (state) {
        case 'ended':
        case 'paused': {
          history.push('/')

          break
        }
        case 'playing': {
          setVisible(1)

          toast({
            title: '동영상 재생 중',
            description: '이 동영상은 자동 재생이 설정된 동영상입니다.',
            isClosable: true
          })

          break
        }
      }
    })
    player.on('playbackQualityChange', event => {
      toast({
        title: '동영상 품질 변경됨',
        description: `현재 네트워크 상태에 따라 동영상이 ${videoQualities[event.data]} 화질로 변경되었습니다.`,
        isClosable: true
      })
    })
  }, [])

  return (
    <>
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
        {...styles.motionContainer}
      >
        <div {...styles.skipContainer}>
          <Link to='/' {...styles.skipAction}>
            동영상 건너뛰기
          </Link>
        </div>
        <div {...styles.wrapper}>
          <div id='yt-v-dTweOZwvTKk' />
        </div>
      </motion.div>
    </>
  )
}

export default IntroPlaybackPage
