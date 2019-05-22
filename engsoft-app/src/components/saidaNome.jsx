class Square extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }
  
    render() {
      return (
        <div>
            {this.state.value}            
        </div>
      );
    }
  }