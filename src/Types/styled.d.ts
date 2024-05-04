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

type SecondRoleContentType = RoleContentType & {
  $clickRole: number | null
  $key: number
}

type SecondRoleImage = {
  $img: string
}
