let defaultState = {
  Items : []

}


const VoterReducer = function(state = defaultState, action){
  let items = state.Items

  switch (action.type) {
    case 'SET_ITEMS':
          return Object.assign({},state, {Items : action.items})

    case 'ADD_ITEM':
          items.push(action.item)
          return Object.assign({},state, {Items : items})

    case 'ON_VOTE':
          let idx = items.findIndex((obj)=>{return obj.Id == action.item.Id})
          items[idx] = action.item
          return Object.assign({},state, {Items : items});

    default:
          return state;
  }
}

export default VoterReducer;
