import React, {useState} from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';

const MapCont: React.FC<{show: boolean, placemark: (Array<number>|null)}> =
    (props: {show: boolean, placemark: (Array<number>|null)}) => {

    return (
        <>
            <div className={`map${!props.show? '': ' map-hidden'}`}>
                <YMaps>
                    <div>
                        <Map className="ymap" defaultState={{ center: [55.75, 37.57], zoom: 9 }} >
                            {props.placemark?<Placemark geometry={props.placemark} />:''}
                        </Map>
                    </div>
                </YMaps>
            </div>
        </>
    )
}

export default MapCont;