import React, { Component } from 'react';
import './Avatars.scss';

import Melioo from '../images/Melioo.png';
import Syraleaf from "../images/Syraleaf.png";

class Avatars extends Component {
    render() {
        return (
            <div className="avatar-wall">
                <p className="avatar-title-web animation-avatar-title-1"><i className="fas fa-lg fa-desktop"></i>&nbsp; <b>Web Developers</b></p>

                <img className="avatar animation-avatar-1" src={Melioo} alt="Melioo" id="Melioo" onClick="Highlight('Melioo', 'slateblue')"
                    data-tippy="Melioo ~Chief Programmer"
                    data-tippy-placement="right-start" />


                <p className="avatar-title-design animation-avatar-title-2"><i className="fas fa-lg fa-pen-fancy"></i>&nbsp; <b>Designers</b></p>

                <img className="avatar animation-avatar-2" src={Syraleaf} alt="Syraleaf" id="Syraleaf" onClick="Highlight('Syraleaf', 'gold')"
                    data-tippy="Syraleaf ~Chief Designer"
                    data-tippy-placement="right-start" />
            </div>
        );
    }
}

export default Avatars;