import React, { Component } from 'react';
import './Timeline.scss';

import Melioo from "../images/Melioo.png";
import Syraleaf from "../images/Syraleaf.png";

class Timeline extends Component {
    render() {
        return (
            <div>
                <header>
                    <p>History in a nutshell!</p>
                    <h1>~ Development Timeline ~</h1>
                </header>

                <hr class="divider" />

                <ul class="timeline">

                    <li>
                        <div class="direction-r">

                            <div class="flag-wrapper"
                                data-tippy="Current LATEST version"
                                data-tippy-placement="left-start"
                                data-tippy-distance="40"
                                data-tippy-arrow="true">

                                <span class="hexa h-big"></span>
                                <span class="flag flag-big" id="current">#1.2.0</span>
                                <span class="time-wrapper"><span class="time">24th of Feb, 2019</span></span>
                            </div>
                            <div class="desc">
                                Profile and Changelog &nbsp;<i class="far fa-lg fa-address-book brand-text-blue"></i><br /><br />

                                <span class="desc-update">
                                    - Extended Profile Edit functional<br />
                                    - Local styles moved to Classes<br />
                                    - Icons upgraded to v5<br />
                                    - Timeline micro-site<br />
                                    - Stability Improvement<br />
                                    - Faster loading time
                                </span>

                                <img src={Syraleaf} class="avatar-small-r r-first hvr-wobble-vertical Syraleaf" alt="Syraleaf" />
                                <img src={Melioo} class="avatar-small-r r-second hvr-wobble-vertical Melioo" alt="Melioo" />
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="direction-l">
                            <div class="flag-wrapper">
                                <span class="hexa h-small"></span>
                                <span class="flag flag-small">#1.0.1</span>
                                <span class="time-wrapper"><span class="time">20th of Feb, 2019</span></span>
                            </div>
                            <div class="desc">
                                Patch of minor issues &nbsp;<i class="fab fa-lg fa-accessible-icon brand-text-dark-red"></i><br /><br />

                                <span class="desc-update">
                                    - Improved load time performance<br />
                                    - Libraries are accessible online<br />
                                    - Fixed Notification bug closing
		                        </span>

                                <img src={Melioo} class="avatar-small-l hvr-wobble-vertical Melioo" alt="Melioo" />
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="direction-r">
                            <div class="flag-wrapper"
                                data-tippy="First FULL version, Woohoo!"
                                data-tippy-placement="left-start"
                                data-tippy-distance="40"
                                data-tippy-arrow="true">
                                <span class="hexa"></span>
                                <span class="flag">#1.0.0</span>
                                <span class="time-wrapper"><span class="time">19th of Feb, 2019</span></span>
                            </div>
                            <div class="desc">
                                Challenges Cycle &nbsp;<i class="fas fa-lg fa-user-clock brand-text-amber"></i><br /><br />

                                <span class="desc-update">
                                    - Challenge assign to player<br />
                                    - Challenge submit and abandon<br />
                                    - Challenge approving and denying by Administrators<br />
                                    - Simple Notifications<br />
                                    - Design Improvements<br />
                                    - Database rebuilding and optimization<br />
                                    - Security Upgrade
		                        </span>

                                <img src={Melioo} class="avatar-small-r hvr-wobble-vertical Melioo" alt="Melioo" />
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="direction-l">
                            <div class="flag-wrapper">
                                <span class="hexa"></span>
                                <span class="flag">#0.8.0</span>
                                <span class="time-wrapper"><span class="time">23rd of Oct, 2018</span></span>
                            </div>
                            <div class="desc">
                                Design Update &nbsp;<i class="fas fa-lg fa-palette brand-text-blue"></i><br /><br />

                                <span class="desc-update">
                                    - Hover Effects library<br />
                                    - Better Backgrounds<br />
                                    - Behemoths System<br />
                                    - Edit of Challenges for Admins<br />
                                    - Early Profile Edit<br />
                                    - Profile Design update<br />
                                    - About Us page<br />
                                    - Tavern Info box
		                        </span>

                                <img src={Melioo} class="avatar-small-l hvr-wobble-vertical Melioo" alt="Melioo" />
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="direction-r">
                            <div class="flag-wrapper">
                                <span class="hexa h-small"></span>
                                <span class="flag flag-small">#0.6.5</span>
                                <span class="time-wrapper"><span class="time">14th of Oct, 2018</span></span>
                            </div>
                            <div class="desc">
                                Challenges Preparations &nbsp;<i class="fas fa-lg fa-suitcase brand-text-dark-red"></i><br /><br />

                                <span class="desc-update">
                                    - Challenges Add for Admins<br />
                                    - Challenges Dashboard for Admins<br />
                                    - Code Quality improvements
		                        </span>

                                <img src={Melioo} class="avatar-small-r hvr-wobble-vertical Melioo" alt="Melioo" />
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="direction-l">
                            <div class="flag-wrapper">
                                <span class="hexa"></span>
                                <span class="flag">#0.6.0</span>
                                <span class="time-wrapper"><span class="time">13th of Oct, 2018</span></span>
                            </div>
                            <div class="desc">
                                Admin Panel Improvements &nbsp;<i class="fas fa-lg fa-columns brand-text-amber"></i><br /><br />

                                <span class="desc-update">
                                    - Admin Panel for Features (Add and Edit)<br />
                                    <span class="desc-update-list">+ Titles<br /></span>
                                    <span class="desc-update-list">+ Run Types<br /></span>
                                    <span class="desc-update-list">+ Party Types<br /></span>
                                    <span class="desc-update-list">+ Difficulties<br /></span>
                                    <span class="desc-update-list">+ Guilds<br /></span>
                                    <span class="desc-update-list">+ Weapons<br /></span>
                                    - Database upgrade<br />
                                    - Design update<br />
                                    - Security Upgrade
		                        </span>

                                <img src={Melioo} class="avatar-small-l hvr-wobble-vertical Melioo" alt="Melioo" />
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="direction-r">
                            <div class="flag-wrapper">
                                <span class="hexa"></span>
                                <span class="flag">#0.5.0</span>
                                <span class="time-wrapper"><span class="time">12th of Oct, 2018</span></span>
                            </div>
                            <div class="desc">
                                Code Migration to GitHub &nbsp;<i class="fas fa-lg fa-code brand-text-amber"></i><br /><br />

                                <span class="desc-update">
                                    - Moved all the code from Live Site to GitHub
		                    </span>

                                <img src={Melioo} class="avatar-small-r hvr-wobble-vertical Melioo" alt="Melioo" />
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="direction-l">
                            <div class="flag-wrapper">
                                <span class="hexa h-big"></span>
                                <span class="flag flag-big">START</span>
                                <span class="time-wrapper"><span class="time">8th of Oct, 2018</span></span>
                            </div>
                            <div class="desc">
                                GitHub Organization Founded &nbsp;<i class="fas fa-lg fa-code-branch brand-text-violet"></i><br /><br />

                                <span class="desc-update">
                                    - Yep, all started here like a little seedling
		                    </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Timeline;