import React from 'react'
import {For} from './index'
import {render} from '@testing-library/react'

test('For should render simple list items as JSX elements', () => {
  const list = ['bill', 'cath', 'steve']
  const {getByTestId} = render(
    <For
      data={list}
      render={(name: string) => (
        <div key={name} data-testid={name}>
          {name}
        </div>
      )}
    />
  )
  expect(getByTestId('bill'))
  expect(getByTestId('cath'))
  expect(getByTestId('steve'))
})

test('For should render nothing when given an empty list', () => {
  const list: null[] = []
  render(<For data={list} render={null as any} />)
})
