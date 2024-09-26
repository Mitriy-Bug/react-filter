import React from "react";
function Toolbar(data) {
    const {nameButton, elem, func } = data;
    return (
        <div className="toolbar-content">
            {nameButton.map((item, idx) =>
                {
                        return <button className={elem === item ? 'toolbar-filter-item active' : 'toolbar-filter-item'} type="button" key={idx} onClick = {() => func(item)}>{item}</button>
                }
            )}
        </div>
    )
}
export default Toolbar;