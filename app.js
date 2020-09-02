// TODO




class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
  }
  onGroceryItemMouseEnter() {
    this.setState({
      hover: true
    });
  }
  onGroceryItemMouseLeave() {
    this.setState({
      hover: false
    })
  }
  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    return (
      <li
        style={style}
        onMouseLeave={this.onGroceryItemMouseLeave.bind(this)}
        onMouseEnter={this.onGroceryItemMouseEnter.bind(this)}
        >
          {this.props.item}</li>
    )
   }
  }
var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
      )}
  </ul>
);




ReactDOM.render(<GroceryList items={['Bread', 'Cheese']}/>, document.getElementById("app"));




// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);

//   }
//   render() {
//     return (
//       <ul>{this.props.itemList}</ul>
//     );
//   }
// }

// var GroceryList = (props) => (
//   <ul>
//     {props.list.map(itemList =>
//      <GroceryListItem list={'Bread', 'Cheese'} />
//   )}
//   </ul>
// )