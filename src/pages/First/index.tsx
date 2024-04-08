import Arrow from '../../components/Arrow'
import RoleList from '../../constants/List'

const First = () => (
  <main id="First">
    {RoleList.map((item) => (
      <div className="role-content" key={item.name} style={{ backgroundColor: item.color }}>
        <h3 className="role-content-name">{item.name}</h3>
        <h4 className="role-content-role">{item.role}</h4>
        <img src={`/images/${item.name}.png`} alt={item.name} />
        <Arrow />
      </div>
    ))}

  </main>
)

export default First
