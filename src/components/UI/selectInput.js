import React from 'react';
import uuid from 'react-uuid';
import styles from './selectInput.module.scss';



const SelectInput = ({ wName, options, id, ...rest }) => {
    return (
        <div className={styles.select}>
            <select name={wName} id={id}>
                {options.map((option) =>
                    <option
                        option={option.value}
                        key={uuid()}
                    >
                        {option.text}
                    </option>
                )}
            </select>
        </div>
    );
}

export default SelectInput;