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

import styles from "./index.module.scss";

const Project = ({ project }) => {

    return (
        <div className={styles.project}>
            <div className={styles.logoContainer}>
                <a href={project.site_url} target="_blank" rel="noreferrer noopener">
                    <img className={styles.logo} src={project.logo_url} alt={project.name} />
                </a>
            </div>
            <div className={styles.text}>
                <span className={styles.title}>
                    <a href={project.site_url} target="_blank" rel="noreferrer noopener">
                        {project.name}
                    </a>
                </span>
                <span className={styles.description} dangerouslySetInnerHTML={{ __html: project.description }} />
            </div>
        </div>
    );
}

export default Project;

