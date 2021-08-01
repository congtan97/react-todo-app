import React from 'react';

const RED = "#f56f42";
const BLUE = "#4287f5";
const GRAY = "#678c89";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.submitThemeColor = this.submitThemeColor.bind(this);
    }

    submitThemeColor(color) {
        if (color) {
            console.log('handleChangeTheme');
            this.props.saveColorTheme(color);
        }
    };

    componentWillReceiveProps(nextProps) {
        console.log("UNSAFE_componentWillReceiveProps: " + JSON.stringify(nextProps));
        document.documentElement
            .style
            .setProperty("--main-color", nextProps.themeColor.color);
    }

    render() {
        return(
            <div className="footer">
                <div className="vertical-center">
                    <span>Choose theme</span>
                    <button onClick={() => this.submitThemeColor(RED)} className="dot red" />
                    <button onClick={() => this.submitThemeColor(BLUE)} className="dot blue" />
                    <button onClick={() => this.submitThemeColor(GRAY)} className="dot gray" />
                </div>
            </div>
        );
    };
}

export default Footer;