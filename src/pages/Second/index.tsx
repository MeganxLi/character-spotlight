import { useEffect, useState } from 'react'

import Switch from '../../components/Switch'
import RoleList from '../../constants/List'
import {
  SecondImage, SecondPage, SecondRoleContent, SecondRoleTitle,
} from '../../styled/pages/Second'
import { breakpoints } from '../../styled/util/Mixins'
import parsePixelValue from '../../util/helper'

const baseUrl = import.meta.env.BASE_URL

const Second = () => {
  const [clickRole, setClickRole] = useState<number | null>(null)

  const clickItem = (itemKey: number) => (clickRole !== itemKey && setClickRole(itemKey))

  const clickSwitch = (calcCurrent: number) => {
    if (calcCurrent < RoleList.length && calcCurrent >= 0) setClickRole(calcCurrent)
  }

  const handleRWD = () => {
    if (window.innerWidth < parsePixelValue(breakpoints.tablet) && clickRole === null) {
      setClickRole(0)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleRWD)
    handleRWD()
    return (() => {
      window.removeEventListener('resize', handleRWD)
    })
  }, [clickRole])

  return (
    <SecondPage $current={clickRole}>
      {RoleList.map((item, key) => (
        <SecondRoleContent
          key={item.name}
          onClick={() => clickItem(key)}
          $backgroundcolor={item.color}
          $clickRole={clickRole}
          $key={key}
        >
          {clickRole === key && (
            <>
              <SecondRoleTitle>{item.name}</SecondRoleTitle>
              <Switch
                next={false}
                current={clickRole || 0}
                onChange={clickSwitch}
              />
              <Switch
                next
                current={clickRole || 0}
                onChange={clickSwitch}
              />
            </>
          )}
          <SecondImage $img={`${baseUrl}images/${item.name}.png`} />
        </SecondRoleContent>
      ))}
    </SecondPage>
  )
}

export default Second
