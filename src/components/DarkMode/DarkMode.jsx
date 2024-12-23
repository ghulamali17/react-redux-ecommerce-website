import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../Redux/slice";
import "./DarkMode.css"

const DarkMode = () => {
    const isToggled = useSelector((state) => state.myCart?.toggle || false);
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggle());
    };

    return (
        <button className="dark_mode">
            <input
                className="dark_mode_input"
                type="checkbox"
                id="darkmode-toggle"
                checked={isToggled}
                onChange={handleToggle} 
            />
            <label className="dark_mode_label" htmlFor="darkmode-toggle">
            </label>
        </button>
    );
};

export default DarkMode;
