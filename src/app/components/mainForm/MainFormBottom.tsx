import React from 'react';
import ControlledOpenSelect from '../../../features/ControlledOpenSelect';
import style from "./MainFormBottom.module.scss"

function MainFormBottom() {
    return (
        <div className={style.navPage}>
            <div className={style.filter}>
                <ControlledOpenSelect/>

            </div>
        </div>
    );
}

export default MainFormBottom;