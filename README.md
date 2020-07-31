# TSX Conditionals

## Example

[Codesandbox](https://codesandbox.io/s/tsx-control-flow-example-v5ty8)

tsx conditionals exposes two components:

`For` & `If`

## Purpose

- Eliminate exposed control flow logic in your components
- Reduce mixing Javascript/Typescript and JSX/TSX in a view component
- Improve readability

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
