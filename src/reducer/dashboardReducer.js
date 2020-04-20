import fetechedItem from 'const/actionNames'

const initialState = {
  list: [],
  count: 0
}

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetechedItem:
      return {
        ...state,
        list: action.payload.results,
        count: action.payload.resultCount
      }
    default:
      return state
  }
}

export default dashboardReducer
