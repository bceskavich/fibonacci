var data = [0];

var Sequence = React.createClass({
  getInitialState: function(){
    return {data: []};
  },
  componentDidMount: function() {
    this.setState({data: this.props.data});
    setInterval(this.addToSequence, 4000);
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
        <Num number={this.state.data[i]} />
      );
    }
    return (
      <div className="sequence">
        {numbers}
      </div>
    );
  }
});

var Num = React.createClass({
  render: function(){
    return (
      <div className="number">
        {this.props.number}
      </div>
    );
  }
});

React.render(
  <Sequence data={data} />,
  document.getElementById('content')
);
