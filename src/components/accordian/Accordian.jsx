import React, { useState } from "react";
import data from "./data";

function Accordian() {
    const [selected, setSelected] = useState(null);

    function singleSelection(currId) {
        setSelected((prevSelected) => 
            prevSelected === currId ? null : currId
        );
    }

    return (
        <div>
            Accordian
            <div>
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div key={dataItem.id} onClick={() => singleSelection(dataItem.id)}>
                            <span>{dataItem.title}</span>
                            <span>{selected === dataItem.id ? "-" : "+"}</span>
                            {selected === dataItem.id && <div>{dataItem.info}</div>}
                        </div>
                    ))
                ) : (
                    <div>Record not found</div>
                )}
            </div>
        </div>
    );
}

export default Accordian;
