import Arrow from '../../components/Arrow'
import { PUBLIC_URL } from '../../constants/EnumType'
import RoleList from '../../constants/List'
import {
  FirstPage, RoleContent, RoleContentName, RoleContentRole, RoleContentTitle,
} from '../../styled/pages/First'

const First = () => (
  <FirstPage>
    {RoleList.map((item) => (
      <RoleContent
        key={item.name}
        backgroundColor={item.color}
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

export default First
