import React, { useState } from 'react'
import { IfAdd } from 'conditional-expanders'

const App = () => {
  const [shouldBeBlue, setShouldBeBlue] = useState<boolean>(false)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div>
        <input
          type='checkbox'
          checked={shouldBeBlue}
          onChange={() => setShouldBeBlue(!shouldBeBlue)}
        />
        <label>Should the box be blue?</label>
      </div>

      <div
        style={{
          width: '100px',
          height: '100px',
          border: 'solid 1px red',
          margin: '20px',
          ...IfAdd(shouldBeBlue, { backgroundColor: 'blue' })
        }}
      />
    </div>
  )
}

export default App
