import React from 'react';
import useButton from 'components/ActionButton/hook';
import ActionButton from 'components/ActionButton';

import styles from './ButtonContainer.module.scss';

function ButtonContainer() {
  const { BUTTONS } = useButton();
  return (
    <div className={styles.buttonContainer}>
      {BUTTONS.map((button) => (
        <div className={styles.buttons} key={button.value}>
          <ActionButton {...button} />
        </div>
      ))}
    </div>
  );
}

export default ButtonContainer;
