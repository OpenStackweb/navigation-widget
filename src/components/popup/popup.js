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

import React from 'react';

import Project from '../project/project';

import styles from "./index.module.scss";

import openInfraLogo from '../../assets/openinfra-logo.svg';

const Popup = ({ projects, popupTitle, popupFooterText }) => {

    return (
        <div className={styles.popup}>
            <div className={styles.outerTriangle}>
                <div className={styles.innerTriangle}>
                </div>
            </div>
            <div className={styles.title}>
                {popupTitle}
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
                    <img src={openInfraLogo} />
                    <span>OpenInfra Foundation</span>
                </div>
                <span className={styles.link}>
                    {popupFooterText} <a href={'https://openinfra.dev'} target="_blank" rel="noreferrer noopener">
                        openinfra.dev
                    </a>
                </span>
            </div>
        </div>
    );
}

export default Popup;

