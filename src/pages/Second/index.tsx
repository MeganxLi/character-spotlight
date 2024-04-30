import { useEffect, useState } from 'react'

import Switch from '../../components/Switch'
import { PUBLIC_URL } from '../../constants/EnumType'
import RoleList from '../../constants/List'
import { SecondPage, SecondRoleContent } from '../../styled/pages/Second'

const Second = () => {
  const [clickRole, setClickRole] = useState<number | null>(null)

  const clickItem = (itemKey: number) => (clickRole !== itemKey && setClickRole(itemKey))

  useEffect(() => {
    console.log('clickRole--', clickRole)
  }, [clickRole])

  return (
    <SecondPage>
      {RoleList.map((item, key) => (
        <SecondRoleContent
          key={item.name}
          onClick={() => clickItem(key)}
          $backgroundcolor={item.color}
          $img={`/${PUBLIC_URL}/images/${item.name}.png`}
        >
          {clickRole === key && (
            <Switch
              next={false}
              current={clickRole || 0}
              onChange={(calcCurrent) => setClickRole(calcCurrent)}
            />
          )}
          {/* <img src={`/${PUBLIC_URL}/images/${item.name}.png`} alt={item.name} /> */}
          {clickRole === key && (
            <Switch
              next
              current={clickRole || 0}
              onChange={(calcCurrent) => setClickRole(calcCurrent)}
            />
          )}
        </SecondRoleContent>
      ))}
    </SecondPage>
  )
}

export default Second
