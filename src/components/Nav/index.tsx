import React, { FC } from 'react'

import { useNav } from '../../support/use-nav'

const Nav: FC = () => {
  const [visible] = useNav()

  if (!visible) return null

  return (
    <div className='nav'>
      Nav is visible!
    </div>
  )
}

export default Nav
