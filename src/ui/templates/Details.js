import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import query from 'mediaQueries'
import {
  push as routerPush,
  goBack as routerGoBack
} from 'connected-react-router'
import propTypes from 'prop-types'

const Details = (props) => {
  const { dashboardList, router, push, goBack } = props

  const { trackId } = router?.location?.state || 0

  if (dashboardList.count === 0 || trackId === 0) push('/')
  const trackDetails =
    dashboardList.list.find((element) => element.trackId === trackId) || []

  const renderTitleContent = [
    {
      title: '',
      content: `${trackDetails.collectionName || ''}`
    },
    {
      title: 'PRICE: ',
      content: `${trackDetails.trackPrice || '00'}`
    },
    {
      title: 'Album Price:',
      content: `${trackDetails.collectionPrice || '00'} ${
        trackDetails.currency || 'RS'
      }`
    },
    {
      title: 'Track on Album:',
      content: `${trackDetails.trackNumber}/${trackDetails.trackCount}`
    }
  ]
  return (
    <DetailsConatainer>
      <BackButton onClick={() => goBack()}>Back</BackButton>
      <ImageWrapper>
        <Image
          src={trackDetails.artworkUrl100 || ''}
          alt=""
          // add link to navigate to oitunes store
        />
      </ImageWrapper>
      <DescriptionWrapper>
        <TableWrapper>
          <TrackTitle> {trackDetails.trackName || ''}</TrackTitle>

          {renderTitleContent.map((ary) => (
            <Title key={ary.content}>
              {ary.title} {ary.content}
            </Title>
          ))}

          <Button
            onClick={() => (window.location.href = trackDetails.trackViewUrl)}
          >
            Buy - On Itunes
          </Button>
        </TableWrapper>
      </DescriptionWrapper>
    </DetailsConatainer>
  )
}

Details.propTypes = {
  push: propTypes.func.isRequired,
  goBack: propTypes.func.isRequired,
  dashboardList: propTypes.object
}

const mapStateToProps = (state) => {
  return {
    dashboardList: state.list,
    router: state.router
  }
}

export default connect(mapStateToProps, {
  push: routerPush,
  goBack: routerGoBack
})(Details)

const DetailsConatainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  @media ${query.lessThanMedium} {
    flex-direction: column;
  }
`

const ImageWrapper = styled.div`
  width: calc(100vw / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 2rem 0;
  background-color: ${(props) => props.theme.static.plainwhite};

  @media ${query.lessThanMedium} {
    width: calc(100vw);
  }
`

const Image = styled.img`
  object-fit: cover;
  width: 50%;
  max-height: 50%;
  border-radius: 2%;
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px #222);
  transition: all 0.3s ease-out;

  &:hover {
    width: 54%;
    max-height: 54%;
    opacity: 0.7;
    transition: all 0.3s ease-out;
  }
`

const DescriptionWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #252525;
  flex-grow: 100;
  padding-left: 2rem;
  padding-right: 2rem;
  @media ${query.lessThanMedium} {
    text-align: center;
  }
`

const TableWrapper = styled.div`
  width: 100%;
  max-height: 50%;
`

const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: normal;
  overflow-wrap: normal;
  text-align: center;
  color: white;
  padding: 0 1.5rem;
  argin-bottom: 1rem;
`

const TrackTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 1.6;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  text-align: center;
  overflow-wrap: normal;
  color: white;
  padding: 0 1.5rem;
  opacity: 0.7;
`
const Button = styled.button`
  background: transparent;
  color: white;
  width: 100%;
  border: 1px solid;
  border-radius: 5px;
  padding: 0.8rem;
  font-size: 1rem;
  margin: 10px 0px;
  cursor: pointer;
`
const BackButton = styled.button`
  position: absolute;
  top: 36px;
  left: 36px;
  color: #0a84ae;
  border: none;
  background-color: transparent;
  font-size: 1.4em;
  outline: none;

  @media ${query.lessThanMedium} {
    top: 13px;
    left: 9px;
    font-size: 1rem;
  }
`
