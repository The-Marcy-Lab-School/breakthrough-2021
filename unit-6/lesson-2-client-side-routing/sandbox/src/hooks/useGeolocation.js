import React from "react";

export default function useGeoLocation(options) {
  const [position, setPosition] = React.useState(null);

  React.useEffect(() => {
    function success(pos) {
      setPosition(pos.coords);
    }

    function error(err) {
      console.warn(err.message);
    }

    const watchId = navigator.geolocation.watchPosition(
      success,
      error,
      options
    );

    return () => {
      console.log("clearing the watch position");
      navigator.geolocation.clearWatch(watchId);
    };
  }, [options]);

  return { position };
}
