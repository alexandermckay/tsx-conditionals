import {IfProps} from './types'

export const If = ({
  cond,
  then,
  orElse = null,
}: {
  cond: boolean
  then: JSX.Element
  orElse?: JSX.Element | null
}) => {
  if (cond) {
    return then
  } else {
    return orElse
  }
}
