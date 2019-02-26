import React, { Component } from 'react';
import './Brands.scss';

import './makeTippy.js';


class Brands extends Component {    
    render() {
        const type = "Functionality";

        return (
            <div class="brands-wall">
                <p class="animated flipInX delay-3p5s brands-title"><i class="fas fa-lg fa-fill"></i>&nbsp; <b>Brand Legend</b></p>

                <makeTippy name={type}></makeTippy>
                <span class="animated zoomInRight delay-4p5s brand-circle brand-amber"></span>
                <span class="animated zoomInRight delay-5s brand-circle brand-violet"></span>
                <span class="animated zoomInRight delay-5p5s brand-circle brand-blue"></span>
            </div>
        );
    }
}

export default Brands;