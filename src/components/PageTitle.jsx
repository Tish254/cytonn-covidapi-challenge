import React from 'react'
import { useLocation } from 'react-router-dom'

const PageTitle = () => {
    const location = useLocation()
    let title = location.pathname.split("/")[location.pathname.split("/").length - 1].replace("-", " ")

    const locationTitle = title.charAt(0).toUpperCase() + title.slice(1)

  return (
    <span className="title" >{locationTitle}</span>
  )
}

export default PageTitle