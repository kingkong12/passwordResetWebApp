/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { connect } from 'react-redux'
import udpateListItems from 'actions/dashboardAction'
import Card from 'ui/organisms/Card'
import propTypes from 'prop-types'
import { push } from 'connected-react-router'
import { SimplePagination } from 'react-swag-pagination'

const recordPerPage = 10

class Dasbaord extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 1,
      steps: 0,
      listArray: []
    }
  }

  updateArrayList = () => {
    let lastindex = this.state.currentPage * recordPerPage || 0
    let firstIndex = lastindex - recordPerPage || 0
    let copyAry = this.props.dashboardList.list.slice(firstIndex, lastindex)
    this.setState({ listArray: copyAry })
  }

  onSuccessFetch = (res) => {
    const { updateReduxList } = this.props
    updateReduxList(res.data)
    let steps = res.data.resultCount / 10 || 1
    this.setState({ steps }, () => this.updateArrayList())
  }

  componentDidMount() {
    const api = 'https://itunes.apple.com/search?term=ColdPlay'
    axios
      .get(api)
      .then((res) => this.onSuccessFetch(res))
      .catch((error) => console.log('error', error))
  }

  navigateUser(id) {
    const { push: routerPush } = this.props
    routerPush({
      pathname: '/details',
      state: { trackId: id }
    })
  }

  nav = (currentPage) =>
    this.setState({ currentPage }, () => this.updateArrayList())
  next = () =>
    this.setState({ currentPage: this.state.currentPage + 1 }, () =>
      this.updateArrayList()
    )
  last = () =>
    this.setState({ currentPage: this.state.steps }, () =>
      this.updateArrayList()
    )
  first = () => this.setState({ currentPage: 1 }, () => this.updateArrayList())
  back = () =>
    this.setState({ currentPage: this.state.currentPage - 1 }, () =>
      this.updateArrayList()
    )

  renderEmptyCOntianer = () => {
    console.log('conatiner')

    return (
      <EmptyWrapper>
        <div> No records Found </div>
      </EmptyWrapper>
    )
  }

  render() {
    const { steps } = this.state

    return (
      <Container>
        <Heading> Tracks of Coldplay </Heading>
        <PaginationWrapper>
          <SimplePagination
            steps={steps}
            defaultStep={1}
            callbackNav={this.nav}
            callbackNext={this.next}
            callbackPrev={this.back}
            font="Roboto"
          />
        </PaginationWrapper>
        <CardWrapper>
          {this.state.listArray.map((item) => (
            <Card
              key={item.trackId}
              item={item}
              viewMoreFunction={() => this.navigateUser(item.trackId)}
            />
          ))}
        </CardWrapper>
      </Container>
    )
  }
}

Dasbaord.propTypes = {
  updateReduxList: propTypes.func.isRequired,
  dashboardList: propTypes.object,
  push: propTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    dashboardList: state.list,
    router: state.router
  }
}

export default connect(mapStateToProps, {
  updateReduxList: udpateListItems,
  push
})(Dasbaord)

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  text-shadow-offset: 10px 5px;
`
const Heading = styled.div`
  padding: 2rem;
  text-align: center;
  font-size: larger;
  -webkit-box-shadow: 0px 1px 1px ${(props) => props.theme.static.shadow};
  -moz-box-shadow: 0px 1px 1px ${(props) => props.theme.static.shadow};
  box-shadow: 0px 1px 1px ${(props) => props.theme.static.shadow};
  background-color: ${(props) => props.theme.static.plainwhite};
`
const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
`
const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 2rem 0 2rem;
`

const EmptyWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: 'center';
  align-item: 'center';
`
