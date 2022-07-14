/**
 * Copyright 2017 OpenStack Foundation
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

import React from "react";
import Navigation from "./components/navigation";

import PropTypes from 'prop-types';

const NavigationWidget = ({ ...props }) => {

    return (
        <Navigation {...props} />
    );
}

NavigationWidget.propTypes = {
    projects: PropTypes.array.isRequired,
    currentProject: PropTypes.number.isRequired,
    navbarTitle: PropTypes.string,
    popupTitle: PropTypes.string,
    popupFooterText: PropTypes.string
}

NavigationWidget.defaultProps = {
    projects: [],
    currentProject: 0,    
    navbarTitle: 'An OpenInfra Project',
    popupTitle: 'More OpenInfra Projects',
    popupFooterText: 'Learn more at'
}

export default NavigationWidget;