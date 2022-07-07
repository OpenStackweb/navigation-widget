/**
 * Copyright 2020 OpenStack Foundation
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

import React, { useState, useEffect, useMemo } from 'react';

import '../styles/styles.scss';

import Navbar from './navbar/navbar';

const NavigationWidget = ({ projects, currentProject }) => {

    const activeProject = projects.find(e => e.id === currentProject);
    const filteredProjects = projects.filter(e => e.should_show_on_navbar && e.is_active && e.id !== currentProject);

    return (
        <Navbar projects={filteredProjects} currentProject={activeProject} />
    );
}

export default NavigationWidget;

