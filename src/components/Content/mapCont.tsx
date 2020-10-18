import React, {useEffect, useState} from 'react';
import {YMaps, Map, Placemark, PlacemarkGeometry} from 'react-yandex-maps';

const MapCont: React.FC<{show: boolean, placemark: (PlacemarkGeometry|undefined)}> =
    (props: {show: boolean, placemark: (PlacemarkGeometry|undefined)}) => {

    return (
        <>
            <div className={`map${!props.show? '': ' map-hidden'}`}>
                <YMaps>
                    <div>
                        <Map className="ymap" defaultState={{ center: [55.75, 37.57], zoom: 9 }} >
                            <Placemark geometry={props.placemark} />
                        </Map>
                    </div>
                </YMaps>
            </div>
        </>
    )
}

export default MapCont;