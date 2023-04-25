import React from 'react'
type PersonProps = {
    name: {
        first: string,
        last: string,
    }[]
}
const PersonList = (props: PersonProps) => {
  return (
    <div>
        <h1>PersonList Page</h1>
      {props.name.map((item) => {
        return (
            <>
            <p>{item.first}, {item.last}</p>
            
            </>
        )
      })}
    </div>
  )
}

export default PersonList
