/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import styled from 'styled-components'
import query from 'mediaQueries'
import propTypes from 'prop-types'

const Card = ({ item, viewMoreFunction = () => {}, ...props }) => {
  const { artworkUrl100, trackName, artistName } = item
  return (
    <CardContainer {...props}>
      <ImgWrapper>
        <Image src={artworkUrl100} alt="" />
      </ImgWrapper>
      <TrackTitle> {trackName}</TrackTitle>
      <TrackDescription> Artist {artistName}</TrackDescription>
      <LinkContainer onClick={() => viewMoreFunction()}>
        <Button>View More</Button>
      </LinkContainer>
    </CardContainer>
  )
}

Card.propTypes = {
  item: propTypes.instanceOf(Object),
  viewMoreFunction: propTypes.func.isRequired
}

export default Card

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid ${(props) => props.theme.branding.lightGray};
  margin: 1rem 1rem 0 1rem;
  padding: 1rem 0;
  cursor: pointer;
  max-height: 20%;
`

const Button = styled.div`
  text-align: center;
  color: ${(props) => props.theme.components.lik};
  text-decoration: none;
`
const CardContainer = styled.div`
  display: block;
  width: calc(100vw / 6);
  margin: 2rem;
  background: ${(props) => props.theme.static.plainwhite};
  border-radius: 0.25rem;
  transition: all 0.3s ease-in;
  font-size: 14px;

  @media ${query.betweenMediumLarge} {
    width: calc(100vw / 4);
  }

  @media ${query.betweenSmallMedium} {
    width: calc(100vw / 3);
    margin: 1rem;
  }

  @media ${query.lessThanSmall} {
    width: 100%;
  }

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-out;
  }
`

const ImgWrapper = styled.div`
  width: 100%;
  max-height: 65%;
  overflow: hidden;
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 100%;
`

const TrackTitle = styled.div`
  font-size: 1em;
  font-weight: 500;
  overflow-wrap: normal;
  text-align: center;
  max-height: 10%;
  color: rgb(33, 33, 33);
  padding-top: 10px;
  @media ${query.betweenSmallMedium} {
    padding-top: 5px;
  }
`
const TrackDescription = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: normal;
  overflow-wrap: normal;
  text-align: center;
  color: rgb(117, 117, 117);
  padding: 0.55rem 1rem 0 1rem;
  max-height: 10%;
`
