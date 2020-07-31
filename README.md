# TSX Conditionals

tsx conditionals exposes two components:

`For` & `If`

`For` replaces:
`{data.map(item => <Component key={item.key} />)}`
`{data && data.map(item => <Component key={item.key} />)}`

`If` replaces:
`{open && <Component />}`
`{open ? <ComponentA /> : <ComponentB />}`

`For` props:
`data: T[] | null`
`render: (item: T) => JSX.Element | React.FC`

`If` props:
`cond: boolean`
`then: JSX.Element`
`orElse: JSX.Element | null`
