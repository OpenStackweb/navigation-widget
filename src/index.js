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

import React from 'react';
import ReactDOM from 'react-dom';
import NavigationWidget from './navigation-widget';

import ProjectsData from './projects-data.json';
import MarketingData from './marketing-data.json';

const widgetProps = {
    projects: ProjectsData.projects,
    currentProject: 3,
    marketingData: MarketingData,
};

// width 780px or 230px

ReactDOM.render(
    <div style={{height: '100vh'}}>
        <NavigationWidget {...widgetProps} />
    </div>,
    document.querySelector('#root')
);