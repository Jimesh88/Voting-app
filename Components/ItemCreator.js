import React from 'react'

class ItemCreator extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      Name : ''
    }
  }

  //on ADD button clicked
  onAdd()
  {
    debugger;
    //set focus to input if user tries to add empty item
    if(this.state.Name.length <= 0)
    {
      this.refs.name.focus();
      return;
    }
    //Initialize new Item object
    let item = {Id : 0, Name : this.state.Name, UpVotes : 0, DownVotes : 0}
    this.setState({Name : ''})
    if(this.props.onAdd)
      this.props.onAdd(item)
  }

  render(){
    debugger;
    let width = parseInt(this.props.width)

    return(
      <div style={{width : width, height : this.props.height}}>
        <input type='text'
              ref='name'
              placeholder = 'Item name'
              value={this.state.Name}
              onChange={(e)=>this.setState({Name : e.target.value})}
              onKeyPress={(e)=>{if(e.which == 13)this.onAdd()}}
              style={{height : '100%', width : width - 115, float : 'left',
                      maxHeight : '50px', fontSize : '15px', borderRadius : '5px'}}
              />
        <button type='button'
              onClick={()=>this.onAdd()}
              style={{height : '100%', width : '100px', float : 'right',cursor : 'pointer',
                      maxHeight : '50px', fontSize : '15px', borderRadius : '5px',
                      borderColor : 'grey', backgroundColor : 'lightgrey'}}>
               <b>ADD</b>
         </button>
      </div>

    )
  }
}

export default ItemCreator;
