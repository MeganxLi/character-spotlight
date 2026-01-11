import Arrow from '../../components/Arrow'
import RoleList from '../../constants/List'
import {
  FirstPage, RoleContent, RoleContentName, RoleContentRole, RoleContentTitle,
} from '../../styled/pages/First'

const baseUrl = import.meta.env.BASE_URL

const First = () => (
  <FirstPage>
    {RoleList.map((item) => (
      <RoleContent
        key={item.name}
        $backgroundcolor={item.color}
      >
        <RoleContentTitle>
          <RoleContentName>{item.name}</RoleContentName>
          <RoleContentRole>{item.role}</RoleContentRole>
        </RoleContentTitle>
        <img src={`${baseUrl}images/${item.name}.png`} alt={item.name} />
        <Arrow />
      </RoleContent>
    ))}

  </FirstPage>
)

export default First
