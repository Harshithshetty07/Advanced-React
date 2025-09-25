import React from "react";

class UserClass extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
        console.log('Child CONSTRUCTOR')
    }

    componentDidMount() {
                console.log('Child COMPONENTDIDMOUNT')

    }

    
    
    render() {
        const {name} = this.props;
        const {count} = this.state
        return (
         <div className="user-card">
        <h2>Name: {name}</h2>
        <h2>Count: {count}
            
        </h2>
        <button onClick={() => {
            this.setState({
                count: this.state.count + 1
            })
        }}>Click</button>
        <h3>Location: Bengaluru</h3>
        <h4>Contact: @rakshithshetty18</h4>
    </div>
    )}
}

export default UserClass