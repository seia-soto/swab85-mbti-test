import React from 'react'

import { css } from 'glamor'

const Header = props => {
  const styles = css({
    textAlign: 'center',
    padding: '35px',

    color: 'rgba(255,255,255,0.8)'
  })

  return (
    <div {...styles}>
      '승우아빠'와 함께하는 유사 MBTI 테스트
    </div>
  )
}

export default Header
