import React from 'react'

type StatusProp = {
    name: "loading" | "error" | "success",
}

const Status = (prop: StatusProp) => {
    let message = ''
    if(prop.name === "loading") {message = "loading the info ..."}
    else if(prop.name === 'success') {message = "Data fetched successfully"}
    else if(prop.name === 'error') {message = "404 Error, fetching data"}

  return (
    <div>
      <h1>Status Page</h1>
      <p>{message}</p>
    </div>
  )
}

export default Status
