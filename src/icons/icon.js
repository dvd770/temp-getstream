import React from "react";
import IcoMoon, { iconList } from "react-icomoon";
const iconSet = require("./selection.json");

const Icon = ({ ...props }) => {
    return <IcoMoon iconSet={iconSet} {...props} />;
};

export default Icon;
