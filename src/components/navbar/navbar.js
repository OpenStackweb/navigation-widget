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

import Popup from '../popup/popup';

import styles from "./index.module.scss";

import openInfraLogo from '../../assets/openinfra-logo.svg';
import menuIcon from '../../assets/menu-icon.svg';

const Navbar = ({ projects }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.brand}>
                <div className={styles.logo}>
                    <img src={openInfraLogo} alt="OpenInfra" />
                </div>
                An OpenInfra Project
            </div>
            <div className={styles.menu}>
                <img src={menuIcon} onClick={handleMenuClick} alt="Menu" />
                {isOpen && <Popup projects={projects} />}
            </div>
        </nav>
    );
}

export default Navbar;

