import React from "react";

function ProjectList(data) {
    return (
        <div className="portfolio-content">
            {data.data.map((item, idx) =>
                <div className="portfolio-content-item" key={idx}><img className="image" src={item.img} alt={item.category} /></div>
            )}
        </div>
    )
}
export default ProjectList;