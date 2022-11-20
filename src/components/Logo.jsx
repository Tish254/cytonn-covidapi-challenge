import React from 'react'
import { Link } from 'react-router-dom'
import { MdCoronavirus } from 'react-icons/md'
import { Typography } from 'antd';

const { Text } = Typography;

const Logo = ({show=true}) => {
  return (
    <Link  className={show ? `flex-row app-logo__container` : "mobile-nav__logo"} to="/dashboard">
        <MdCoronavirus className='app-logo__icon' />
        <Text className="app-logo__text">
            Covid-19 Tracker
        </Text>
    </Link>
  )
}

export default Logo