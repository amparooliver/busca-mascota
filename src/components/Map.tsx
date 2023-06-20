import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, } from "react-leaflet";

interface Report {
    id: number,
    title: string,
    picture: string,
    country: string,
    city: string,
    latitude: number,
    longitude: number,
}

const Map = ({ zoom = 11, currentPosition, setCurrentPosition, click,  listaReportes}: { click: boolean, zoom?: number, currentPosition?: any, setCurrentPosition?: any, listaReportes?: Array<Report> }) => {
    const Ip = 'http://localhost:8000'
    function LocationMarker() {

        const map = useMapEvents({
            click(e) {
                if (click) {
                    setCurrentPosition(e.latlng)
                }
            }
        });

        // Si el mapa es clickeable
        if (click) {
            return currentPosition === null && click == true ? null : (
                <Marker position={currentPosition}>
                    <Popup>You are here</Popup>
                </Marker>
            )
        }

    }

    return (
        <div>
            <MapContainer center={[-25.3, -57.6]} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {listaReportes.length !== 0 && listaReportes.map((item, index)=> (
                    // <div key={index}>{item.title}</div>
                <Marker key={index} position={[item.latitude, item.longitude]}>
                    <Popup>
                        <div className="text-center">
                            <h2 className="fs-3 pt-3 px-3 text-danger fw-bold">{item.title.toUpperCase()}</h2> <br />
                            <img src={Ip + item.picture} width={200} alt="hola" />
                            <p className="fs-6 fw-bold">{item.city && item.city + ','} {item.country && item.country}</p>
                            <button className="bg-blue-subtle btn text-dark">Ver Reporte Completo</button>
                        </div>
                    </Popup>
                </Marker>
                ))}
                
                <LocationMarker></LocationMarker>
            </MapContainer>
        </div>
    )
}

export default Map