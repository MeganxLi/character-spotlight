import { useRef, useState } from 'react'

import Arrow from '../../components/Arrow'
import { PUBLIC_URL } from '../../constants/EnumType'
import RoleList from '../../constants/List'
import {
  FirstPage, RoleContent, RoleContentName, RoleContentRole, RoleContentTitle,
} from '../../styled/pages/First'

const First = () => {
  const roleItemRef = useRef<(HTMLDivElement | null)[]>([])
  const [showRole, setShowRole] = useState<string | null>(null)

  const handleMouseEnter = (name: string) => {
    setShowRole(name)
  }

  const handleMouseLeave = () => {
    setShowRole(null)
  }
  return (
    <FirstPage>
      {RoleList.map((item) => (
        <RoleContent
          key={item.name}
          backgroundColor={showRole === item.name ? item.color : '#000'}
          ref={(el) => { roleItemRef.current = [...roleItemRef.current, el] }}
          onMouseEnter={() => handleMouseEnter(item.name)}
          onMouseLeave={handleMouseLeave}
        >
          <RoleContentTitle>
            <RoleContentName>{item.name}</RoleContentName>
            <RoleContentRole>{item.role}</RoleContentRole>
          </RoleContentTitle>
          <img src={`/${PUBLIC_URL}/images/${item.name}.png`} alt={item.name} />
          <Arrow />
        </RoleContent>
      ))}

    </FirstPage>
  )
}

export default First
