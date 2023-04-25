import React from 'react'

type ComponentProps = {
    children : string,
}

const Component = (prop: ComponentProps) => {
  return (
    <div>
      <h2>Component Page</h2>
      <p>{prop.children}</p>
    </div>
  )
}

export default Component
