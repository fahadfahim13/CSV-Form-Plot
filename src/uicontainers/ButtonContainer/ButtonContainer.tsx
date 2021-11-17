import React from 'react';

import ActionButton from "components/ActionButton";
import {BUTTONS} from "./constants";
import styles from './ButtonContainer.module.scss';

function ButtonContainer() {
    return (
        <div className={styles.buttonContainer}>
            {
                BUTTONS.map((button) => <div className={styles.buttons}><ActionButton {...button} /></div>)
            }
        </div>
    );
}

export default ButtonContainer;