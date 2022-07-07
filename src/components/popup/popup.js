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

import Project from '../project/project';

import styles from "./index.module.scss";

const Popup = ({ projects, currentProject }) => {

    console.log('projects', projects);

    return (
        <div className={styles.popup}>
            <div className={styles.outerTriangle}>
                <div className={styles.innerTriangle}>
                </div>
            </div>
            <div className={styles.title}>
                More OpenInfra Projects
                <hr />
            </div>
            <div className={styles.projects}>
                <div className={styles.projectsWrapper}>
                    {projects.map((project, index) => <Project project={project} key={index} />)}
                </div>
                <hr />
            </div>
            <div className={styles.footer}>
                <div className={styles.brand}>
                    <img src={currentProject.logo_url} />
                    <span>{currentProject.name}</span>
                </div>
                <span className={styles.link}>
                    Learn more at <a href={currentProject.learn_more_link} target="_blank" rel="noreferrer noopener">
                        {currentProject.learn_more_text}
                    </a>
                </span>
            </div>
        </div>
    );
}

export default Popup;

