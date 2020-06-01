export interface IfProps {
  cond: boolean
  then: JSX.Element
  orElse?: JSX.Element | null
}
