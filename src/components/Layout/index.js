import React from "react"
import PropTypes from "prop-types"
import SideBar from '../Sidebar'
import MenuBar from '../MenuBar'
import { TransitionPortal } from 'gatsby-plugin-transition-link'

import * as S from './styled'

import GlobalStyles from '../../styles/global'

const Layout = ({ children }) => {
  return (
    <S.LayuoutWrapper>
      <GlobalStyles />
      <TransitionPortal level="top">
        <SideBar/>
      </TransitionPortal>
      <S.LayoutMain>{children}</S.LayoutMain>
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal >
    </S.LayuoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
