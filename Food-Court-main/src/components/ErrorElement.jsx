import React from 'react'
import { useRouteError } from 'react-router-dom'
const ErrorElement = () => {
    const err=useRouteError();
    console.log(err);
  return (
    <div>
        <h1>Oops!!!</h1>
        <h2>Something went wrong!!!</h2>
    </div>
  )
}

export default ErrorElement
