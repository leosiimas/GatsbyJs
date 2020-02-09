import React from 'react'
import propTypes from 'prop-types'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import * as S from './styled'

const Pagination = ({isFirst, isLast, currentPage, numPages, prevPage,nextPage}) => (
  <S.PaginationWrapper>
   {!isFirst && <AniLink
      cover
      direction="left"
      bg="#16202c"
      duration={0.6}
      to={prevPage}
    >← página anterior
    </AniLink>}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && <AniLink
      cover
      direction="right"
      bg="#16202c"
      duration={0.6}
      to="/"
      to={nextPage}
    >
    proxima página →</AniLink>}
  </S.PaginationWrapper>
)

Pagination.prototype = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currntPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}


export default Pagination
