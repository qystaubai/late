import React, {useEffect, useState} from 'react';
import {YMaps, Map, Placemark, PlacemarkGeometry} from 'react-yandex-maps';

interface MapProps {
    show: boolean,
    placemark: (PlacemarkGeometry|undefined),
    address: {
        address: string,
        coordinates: Array<number>
    }
}

const MapCont: React.FC<MapProps> = (props: MapProps) => {
    return (
        <>
            <div className={`map${!props.show? '': ' map-hidden'}`}>
                <YMaps>
                    <div>
                        <Map className="ymap" state={{ center: props.address.coordinates, zoom: 9 }} >
                            <Placemark geometry={props.placemark} />
                        </Map>
                    </div>
                </YMaps>
            </div>
        </>
    )
}

export default MapCont;
