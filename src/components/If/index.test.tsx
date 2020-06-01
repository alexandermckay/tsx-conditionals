import React from 'react'
import {If} from './index'
import {render} from '@testing-library/react'

const Child = () => <div data-testid='If-Child' />

test('If should render child component to screen if cond is true', () => {
  const {getByTestId} = render(
    <If cond={true} then={<Child />} />
  )
  getByTestId('If-Child')
})

test('If should not render child component to screen if cond is false', () => {
  const {queryByTestId} = render(
    <If cond={false} then={<Child />} />
  )
  expect(queryByTestId('If-Child')).toBe(null)
})
