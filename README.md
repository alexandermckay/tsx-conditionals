# TSX Conditionals

tsx conditionals exposes two components:

`For` & `If`

## Purpose

I don't like having exposed control flow logic in my components.

### `For` replaces:
- `{data.map(item => <Component key={item.key} />)}`
- `{data && data.map(item => <Component key={item.key} />)}`

### `If` replaces:
- `{open && <Component />}`
- `{open ? <ComponentA /> : <ComponentB />}`

## Props

### `For` props:
- `data: T[] | null`
- `render: (item: T) => JSX.Element | React.FC`

### `If` props:
- `cond: boolean`
- `then: JSX.Element`
- `orElse: JSX.Element | null`
