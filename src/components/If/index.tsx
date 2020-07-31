import {IfProps} from './types'

export const If = ({cond, then, orElse = null}: IfProps) => {
  if (cond) {
    return then
  } else {
    return orElse
  }
}
