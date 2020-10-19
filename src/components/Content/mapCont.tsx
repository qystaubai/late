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

    const [test, setTest] = useState([55.65, 37.47]);

    const te = () => {
        setTest([55.75, 37.57]);
    }

    return (
        <>
            <div className={`map${!props.show? '': ' map-hidden'}`}>
                <YMaps>
                    <div>
                        <Map className="ymap" state={{ center: props.address.coordinates, zoom: 9 }} >
                            <Placemark geometry={props.placemark} />
                            {/*{test? <Placemark geometry={[57.75, 37.57]} />: ''}*/}
                        </Map>
                    </div>
                </YMaps>
            </div>
            <button onClick={te}> asdf </button>
        </>
    )
}

export default MapCont;
