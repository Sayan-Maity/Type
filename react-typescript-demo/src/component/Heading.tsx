import React from 'react'

type HeadingProps = {
    children: string,
}

const Heading = (prop: HeadingProps) => {
  return (
    <div>
      <h1>Heading Page</h1>
      <p>{prop.children}</p>
    </div>
  )
}

export default Heading
