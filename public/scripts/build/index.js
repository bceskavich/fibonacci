var data = [0];

var Sequence = React.createClass({displayName: "Sequence",
  getInitialState: function(){
    return {data: []};
  },
  componentDidMount: function() {
    this.setState({data: this.props.data});
    setInterval(this.addToSequence, 2000);
  },
  // Logic to calculate the sequence
  addToSequence: function(){
    var sequence = this.state.data;
    // If the sequence is only one long, add 1
    if (sequence.length == 1){
      sequence.push(1)
    } else {
      var newVal = sequence[sequence.length-1] + sequence[sequence.length-2];
      sequence.push(newVal);
    }
    this.setState({data: sequence});
  },
  render: function(){
    // var seq = this.state.data;
    var numbers = [];
    for (i = this.state.data.length - 1; i > -1; i--) {
      numbers.push(
        React.createElement(Num, {number: this.state.data[i]})
      );
    }
    return (
      React.createElement("div", {className: "sequence"}, 
        numbers
      )
    );
  }
});

var Num = React.createClass({displayName: "Num",
  render: function(){
    return (
      React.createElement("div", {className: "number"}, 
        this.props.number
      )
    );
  }
});

React.render(
  React.createElement(Sequence, {data: data}),
  document.getElementById('content')
);
