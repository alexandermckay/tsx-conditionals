import React, {Fragment} from 'react'
import {render} from 'react-dom'

const code = {
  background: '#06d6a0',
  color: '#fff',
  fontFamily: 'monospace',
  fontSize: '1.25rem',
  padding: '0 0.25rem',
}

const styles = {
  code,
  codeBlock: {
    ...code,
    display: 'block',
    padding: '1rem',
  },
  h1: {fontFamily: 'sans-serif', color: '#073b4c'},
  p: {fontFamily: 'sans-serif', size: '1.25rem'},
}

const CodeBlock: React.FC = ({children}) => (
  <div style={styles.codeBlock}>{children}</div>
)

const App: React.FC = () => (
  <Fragment>
    <h1 style={styles.h1}>If Conditional</h1>
    <CodeBlock>
      <p>{"import {If} from 'tsx-conditionals'"}</p>
    </CodeBlock>
    <h2 style={styles.h1}>then</h2>
    <p style={styles.p}>
      If <span style={styles.code}>cond</span> is{' '}
      <span style={styles.code}>false</span>,{' '}
      <span style={styles.code}>orElse</span> returns{' '}
      <span style={styles.code}>null</span>
    </p>
    <CodeBlock>
      <p>...</p>
      <p>{'<If cond={true} then={<Component />} />'}</p>
      <p>...</p>
    </CodeBlock>
    <h2 style={styles.h1}>orElse</h2>
    <CodeBlock>
      <p>...</p>
      <p>
        {
          '<If cond={true} then={<Component />} orElse={<FallbackComponent />} />'
        }
      </p>
      <p>...</p>
    </CodeBlock>
    <h1 style={styles.h1}>For Conditional</h1>
    <CodeBlock>
      <p>{"import {For} from 'tsx-conditionals'"}</p>
    </CodeBlock>
    <p style={styles.p}>
      If <span style={styles.code}>data</span> is an empty array
      or undefined <span style={styles.code}>null</span> is
      returned. Similarly if{' '}
      <span style={styles.code}>render</span> if not a valid
      function <span style={styles.code}>null</span> is returned.
    </p>
    <CodeBlock>
      <p>...</p>
      <p>
        {
          '<For data={users} render={(user) => <User {...user} />} />'
        }
      </p>
      <p>...</p>
    </CodeBlock>
  </Fragment>
)

render(<App />, document.getElementById('root'))
