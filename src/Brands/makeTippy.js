import React, { Component } from 'react';

import Tippy from "@tippy.js/react";
import "tippy.js/themes/light-border.css";

class makeTippy extends Component {
    render() {
        return (
            <Tippy
                content={this.props.name}
                theme="light-border"
                arrow="true"
                placement="right-start"
            >
                <span class="animated zoomInRight delay-4s brand-circle brand-dark-red" />
            </Tippy>
        );
    }
}

export default makeTippy;