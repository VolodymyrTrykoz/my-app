import React from "react";
import Select from "react-select";

export default class SelectTest extends React.Component {
    constructor(props) {
        super(props);

        const options = [
            { value: "one", label: "One" },
            { value: "two", label: "Two" }
        ];

        this.state = {
            select: {
                value: 'options[0]', // "One" as initial value for react-select
                options // all available options
            }
        };
    }

    setValue = value => {
        this.setState(prevState => ({
            select: {
                ...prevState.select,
                value
            }
        }));
    };

    bbb = () => {
        this.setState(prevState => ({
            select: {
                ...prevState.select,
                value:null
            }
        }));
    }

    handleChange = value => {
        this.setValue(value);
    };

    handleClick = () => {
        this.setValue(null); // here we reset value
    };

    render() {
        const { select } = this.state;

        return (
            <div>
                <p>
                    <button type="button" onClick={this.handleClick}>
                        Reset value
                    </button>
                    <button type="button" onClick={this.bbb}>
                        Reset value
                    </button>
                </p>
                <Select
                    name="form-field-name"
                    value={select.value}
                    onChange={this.handleChange}
                    options={select.options}
                />
            </div>
        );
    }
}
