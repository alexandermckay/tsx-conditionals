import {ReactNode} from 'react'

export type TFor = <D>({
  data,
  render,
}: {
  data: D[]
  render: (value: D, index: number, array: D[]) => ReactNode
}) => JSX.Element | null
