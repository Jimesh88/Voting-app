import axios from 'axios'


// Set list of Items
export const setItems = function(items){
  return{
    type : 'SET_ITEMS',
    items : items
  }
}

// Add new Item in list
export const addItem = function(item){
  updateItem(item);
  return{
    type : 'ADD_ITEM',
    item : item
  }
}

// Update item at server
const updateItem = function(item){
  axios({
    method:'post',
    url: 'http://localhost:8080/api/',
    responseType:'json',
    data : {item : item}
  }).then((resp)=>{

    })
    .catch((err)=>{
      alert(err)
    })
}

// Update UpVote or DownVote
export const onVote = function(act, item){
  //Add Vote Count
  if(act == 'up')
      item.UpVotes += 1
  else
      item.DownVotes += 1

  // Update Vote count to server (remove following line if vote count need not to be updated to server)
  updateItem(item);

  return{
    type : 'ON_VOTE',
    item : item
  }
}
