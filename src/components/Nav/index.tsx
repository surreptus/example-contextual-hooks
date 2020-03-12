import React, { FC } from 'react'

import { useNav } from '../../support/use-nav'

const Nav: FC = () => {
  const [visible, setVisible] = useNav()

  const toggleNav = () => setVisible(false)

  if (!visible) return null

  return (
    <div className='nav'>
      Nav is visible!

      <button onClick={toggleNav} type='button'>
        Close Nav
      </button>
    </div>
  )
}

export default Nav
