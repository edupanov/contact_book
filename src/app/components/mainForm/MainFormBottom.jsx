import React from 'react';
import style from "./MainFormBottom.module.scss"
import ControlledOpenSelect from "../../features/ControlledOpenSelect";

class MainFormBottom extends React.Component {
    render() {
        return (
            <div className={style.navPage}>
                <div className={style.filter}>
                    <span>Строк на странице</span>
                   <ControlledOpenSelect/>

                </div>

            </div>
        );
    }
}

export default MainFormBottom;