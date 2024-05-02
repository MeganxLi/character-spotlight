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
  $img: string
  $clickRole: number | null
  $key: number
}
