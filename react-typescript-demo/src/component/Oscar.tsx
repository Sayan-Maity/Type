import React from 'react'

type OscarProps = {
  children: React.ReactNode
}

const Oscar = (prop: OscarProps) => {
  return (
    <div>
      <h1>Oscar Page</h1>
      <p>{prop.children}</p>

      

    </div>
  )
}

export default Oscar
