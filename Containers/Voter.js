import React from 'react'
import axios from 'axios'
import _ from 'underscore';
import {addItem, onVote, setItems} from '../Actions/action.js'
import {connect} from 'react-redux'
import ItemCreator from '../Components/ItemCreator.js'
import '../style.css'

class Voter extends React.Component
{
  debugger;
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount()
  {
    debugger;
    // Get items list from server
    axios({
      method:'get',
      url: 'http://localhost:8080/api/',
      responseType:'json',
    }).then((resp)=>{
      this.props.setItems(resp.data.Items)
    })
    .catch((err)=>{
      console.log(err)
      alert(err)
    })
  }

//To add item in list
onAddClick(item){
  debugger;
  let items = this.props.Items

  //set Id for new Item
  let id = 1
  if(items.length > 0)
    id = _.max(items, (item)=> {return item.Id}).Id + 1

  item.Id = id;
  this.props.addItem(item);
  this.setState({})
}

getItemsControl()
{
  debugger;
  return(
    <ul style={{listStyleType: 'none', padding : '0px'}}>
    {
      this.props.Items.map((item, idx)=>{
        return (<li key={idx} className='itemStyle'>
                    <span>
                    <div style={{display : 'inline-flex', maxWidth : '430px', overflowX : 'hidden'}}>{item.Name}</div>
                    <div style={{float : 'right', paddingLeft : '13px', fontSize : '20px'}} >
                      <img src={"./images/" + ((item.DownVotes > 0)? "DownVoted.png" : "Down.png")}
                           height = '30px'
                           width = '30px'
                           onClick={()=>{this.props.onVote('down', item); this.setState({})}}
                           style={{verticalAlign : 'middle', cursor :  'pointer'}}
                           title="Dislike"
                           />
                      <span style={{verticalAlign : 'middle', padding : '5px'}}>{item.DownVotes}</span>
                    </div>
                    <div style={{float : 'right', paddingRight : '13px', fontSize : '20px'}} >
                      <img src={"./images/" + ((item.UpVotes > 0)? "UpVoted.png" : "Up.png")}
                           height = '30px'
                           width = '30px'
                           onClick={()=>{this.props.onVote('up', item); this.setState({})}}
                           style={{verticalAlign : 'middle', cursor :  'pointer'}}
                           title="Like"
                           />
                      <span style={{verticalAlign : 'middle', padding : '5px'}}>{item.UpVotes}</span>
                    </div>

                    </span>
                </li>)
      })
    }
    </ul>
  )
}

  render(){
    return(
      <div style={{margin : '50px', textAlign : 'center', width : '700px'}}>
          <img src = "./images/react.svg" height='200px' width='200px' style={{padding : '20px'}}/>
          <ItemCreator onAdd={(item)=>this.onAddClick(item)} width = '630px' height = '30px'/>
          <div>
              {this.getItemsControl()}
          </div>
      </div>
    )
  }
}

const mapStateToProps = function(state){
  debugger;//destucting
  var {Items} = state.VoterReducer

  return {Items}
}

const mapDispatchToProps = function(dispatch){
  debugger;
  return{
    setItems(items){
      dispatch(setItems(items))
    },
    addItem(item){
      dispatch(addItem(item))
    },
    onVote(action, item){
      dispatch(onVote(action, item))
    }

  }
}

const MainApp = connect(mapStateToProps, mapDispatchToProps)(Voter)

export default MainApp;
