import React from 'react'

import { css } from 'glamor'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  Link,
  Text,
  Stack,
  useDisclosure
} from '@chakra-ui/react'
import {
  FaYoutube,
  FaTwitch,
  FaDiscord
} from 'react-icons/fa'

const Header = props => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const styles = {
    header: css({
      textAlign: 'center',
      padding: '35px',

      color: 'rgba(255,255,255,0.8)',

      wordBreak: 'keep-all'
    }),
    drawerBody: {
      wordBreak: 'keep-all'
    },
    actionGroup: {
      padding: '16px 0'
    },
    siteDescription: {
      paddingBottom: '8px'
    }
  }

  return (
    <>
      <div {...styles.header}>
        <Link onClick={onOpen}>
          '승우아빠'
        </Link>
        와 함께하는 유사 MBTI 테스트
      </div>
      <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>'승우아빠'에 대해서 더 알아보세요!</DrawerHeader>
            <DrawerBody css={styles.drawerBody}>
              <Text color='gray.500' css={styles.siteDescription}>
                '승우아빠 MBTI'는 팬 사이트이며 '승우아빠'는 목진화 셰프님의 트레이드 마크입니다.<br />
                현재 웹 사이트에서의 MBTI 테스트는 정식 테스트 결과가 아니며 절대로 과도하게 신뢰하여 문제가 생기는 일이 없도록 주의하시기 바랍니다.
              </Text>
              <Heading as='h2' size='md'>
                승우아빠
              </Heading>
              <Text>
                눈으로 보기만 할수 있는 채널이 아닌,<br />
                그냥 스쳐 지나가는 어려운 레시피가 아닌,<br />
                누구나 따라할 수 있는 레시피 채널을 만들고 싶어요!
              </Text>
              <Stack direction='row' spacing={4} css={styles.actionGroup}>
                <Button as={Link} leftIcon={<FaYoutube />} colorScheme='red' href='https://www.youtube.com/channel/UCgsffS7MfKL6YU3r_U3E-aA' isExternal>
                  YouTube
                </Button>
                <Button as={Link} leftIcon={<FaTwitch />} colorScheme='purple' href='https://www.twitch.tv/swab85' isExternal>
                  Twitch
                </Button>
              </Stack>
              {
                // creator credit;
              }
              <Heading as='h2' size='md'>
                제작자: Seia-Soto
              </Heading>
              <Text>
                가지가지마다 아름다움의 가치를,<br />
                어느날 당신이 관심을 가질만한 웹 서비스를 만듭니다.
              </Text>
              <Stack direction='row' spacing={4} css={styles.actionGroup}>
                <Button as={Link} leftIcon={<FaDiscord />} colorScheme='gray' href='https://discordapp.com/invite/vAEBXWY' isExternal>
                  Discord
                </Button>
                <Button as={Link} colorScheme='gray' href='https://seia.io' isExternal>
                  Website
                </Button>
              </Stack>
            </DrawerBody>
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                닫기
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default Header
