import React from "react";

class AddButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.addWatch} className="AddButton">
                +
            </button>
        )
    }
}

export default AddButton;