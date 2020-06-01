import React, {Fragment} from 'react'
import {TFor} from './types'

export const For: TFor = ({data, render}) => {
  const dataExists = data && data.length > 0
  const isFn = render instanceof Function
  const validInputs = dataExists && isFn
  if (validInputs) {
    return <Fragment>{data.map(render)}</Fragment>
  } else {
    return null
  }
}
