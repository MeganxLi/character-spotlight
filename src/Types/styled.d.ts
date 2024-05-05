/* -- First --*/
type RoleContentType = {
  $backgroundcolor: string
}

/* -- Second --*/
type SwitchType = {
  $nextDirection: boolean
}

type SecondPageType = {
  $current: number | null
}

type SecondCurrentItemType = {
  $clickRole: number | null
  $key: number
}

type SecondRoleContentType = RoleContentType & SecondCurrentItemType

type SecondRoleImage = {
  $img: string
}
