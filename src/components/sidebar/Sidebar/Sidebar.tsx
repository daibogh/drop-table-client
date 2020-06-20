import React from 'react'
import { Line } from '~/components/shared/base/Line'
import { Icon } from '~/components/shared/base/Icon'
import { NavLink } from 'react-router-dom'

import './Sidebar.scss'

const Sidebar: React.FunctionComponent = () => {
  return (
    <Line
      className="Sidebar"
      vertical
      alignItems="center"
      justifyContent="center"
    >
      <NavLink exact to="/" activeClassName="active">
        <Icon name="list" className="icon"></Icon>
      </NavLink>
      <NavLink to="/add">
        <Icon name="plus-square" prefix="far" className="icon"></Icon>
      </NavLink>
      <NavLink to="/statistics">
        <Icon name="chart-bar" className="icon"></Icon>
      </NavLink>
    </Line>
  )
}

export default Sidebar
