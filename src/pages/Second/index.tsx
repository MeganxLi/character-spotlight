import { useState } from 'react'

import Switch from '../../components/Switch'
import { PUBLIC_URL } from '../../constants/EnumType'
import RoleList from '../../constants/List'
import {
  SecondImage, SecondPage, SecondRoleContent, SecondRoleTitle,
} from '../../styled/pages/Second'

const Second = () => {
  const [clickRole, setClickRole] = useState<number | null>(null)

  const clickItem = (itemKey: number) => (clickRole !== itemKey && setClickRole(itemKey))

  const clickSwitch = (calcCurrent: number) => {
    if (calcCurrent < RoleList.length && calcCurrent >= 0) setClickRole(calcCurrent)
  }

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
          <SecondImage $img={`/${PUBLIC_URL}/images/${item.name}.png`} />
        </SecondRoleContent>
      ))}
    </SecondPage>
  )
}

export default Second
