import React, { useState } from "react";
import WorldMap from "react-world-map";
import "./Map.css";

const Map = () => {
  const data = [
    { country: "cn", value: 1389618778 },
    { country: "in", value: 1311559204 },
    { country: "us", value: 331883986 },
    { country: "id", value: 264935824 },
    { country: "pk", value: 210797836 },
    { country: "br", value: 210301591 },
    { country: "ng", value: 208679114 },
    { country: "bd", value: 161062905 },
    { country: "ru", value: 141944641 },
    { country: "mx", value: 127318112 },
  ];

  const stylingFunction = (context) => {
    const opacityLevel =
      0.1 +
      (1.5 * (context.countryValue - context.minValue)) /
        (context.maxValue - context.minValue);
    return {
      fill: context.country === "US" ? "blue" : context.color,
      fillOpacity: opacityLevel,
      stroke: "green",
      strokeWidth: 1,
      strokeOpacity: 0.2,
      cursor: "pointer",
    };
  };

  const [selected, onSelect] = useState(null);

  return (
    <div className="Map">
      <WorldMap selected={selected} onSelect={onSelect} />
    </div>
  );
};

export default Map;
