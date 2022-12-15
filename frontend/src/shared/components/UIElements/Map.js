import React, { useEffect, useRef } from "react";

import "./Map.css";

const Map = (props) => {
    const mapRef = useRef();
    const {center, zoom} = props;

    /* Hui, I think it's really impressive that you used maps in this project.
    It is such an excellent feature to include. Well done!*/
    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: center,
            zoom: zoom,
        });
        new window.google.maps.Marker({ position: center, map: map });
    }, [center, zoom]);

    
    return (
        <div
            ref={mapRef}
            className="map"
            style={props.style}
        ></div>
    );
};

export default Map;
