import React, { FC } from 'react'

import { useNav } from '../../support/use-nav'

const Actions: FC = () => {
  const [visible, setVisible] = useNav()

  const toggleNav = () => setVisible(!visible)

  return (
    <button
      type='button'
      onClick={toggleNav}
    >
      toggle nav
    </button>
  )
}

export default Actions
