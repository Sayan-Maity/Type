import React from 'react'
type PersonProps = {
    name: {
        firstName: string,
        lastName: string,
    }
}

const Person = (props: PersonProps) => {
  return (
    <div>
        <h1>Person Page</h1>
        <p>{props.name.firstName}</p>
        <p>{props.name.lastName}</p>
      
    </div>
  )
}

export default Person




