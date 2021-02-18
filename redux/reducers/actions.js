
const actions = (state = [], action) => {

  switch (action.type) {
    case 'ADD_ACTION':

      return [

        ...state, 

        {
          ...action.payload
        }
      ]
    default:
      return state
  }
}

export default actions