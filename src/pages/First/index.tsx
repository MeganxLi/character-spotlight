import { useRef, useState } from 'react'

import Arrow from '../../components/Arrow'
import { PUBLIC_URL } from '../../constants/EnumType'
import RoleList from '../../constants/List'

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
    <main id="First">
      {RoleList.map((item) => (
        <div
          className="role-content"
          key={item.name}
          style={{ backgroundColor: showRole === item.name ? item.color : '#000' }}
          ref={(el) => { roleItemRef.current = [...roleItemRef.current, el] }}
          onMouseEnter={() => handleMouseEnter(item.name)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="role-content-title">
            <h3 className="role-content-name">{item.name}</h3>
            <h4 className="role-content-role">{item.role}</h4>
          </div>
          <img src={`${PUBLIC_URL}/images/${item.name}.png`} alt={item.name} />
          <Arrow />
        </div>
      ))}

    </main>
  )
}

export default First
