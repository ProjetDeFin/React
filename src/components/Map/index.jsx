import React from 'react';
import {
  GoogleMap,
  Marker,
  useJsApiLoader
} from '@react-google-maps/api';

const containerStyle = {
  width: '600px',
  height: '450px'
};

const Map = ({ item = null, lat = null, lng = null }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  const [map, setMap] = React.useState(null);

  let center = null;

  if (item && item.lat && item.lng) {
    center = {
      lat: item.lat,
      lng: item.lng
    };
  } else if (lat && lng) {
    center = {
      lat: lat,
      lng: lng
    };
  }

  const onLoad = React.useCallback(function callback(map) {
    if (center) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map);
    }
  }, [center]);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  if (!center) {
    return <div>No location provided</div>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Map);
