import React from "react";
import { FaCircle, FaCircleNotch, FaHockeyPuck, FaTimes } from 'react-icons/fa';

const Icons = ({ player }) => {
    switch (player) {
        case "zero":
            return <FaCircleNotch size="4em" color="red" />;
        case "cross":
            return <FaTimes size="4em" color="green" />
        default:
            return <FaHockeyPuck size="4em"  />
    }
}

export default Icons;