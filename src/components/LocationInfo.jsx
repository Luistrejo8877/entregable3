const LocationInfo = ({ location }) => {
    console.log(location)

    return (
        <article className="body-location">
            <h2 className="hijo hijo-2">{location?.name}</h2>
            <ul className="hijo hijo-1">
                <li className="hijo hijo-1"><span >Type:</span><span>{location?.type}</span></li>
                <li className="hijo hijo-3"><span>Dimension:</span><span>{location?.dimension}</span></li>
                <li className="hijo hijo-2"><span>Population:</span><span>{location?.residents.length}</span></li>
            </ul>
        </article>
    )
}

export default LocationInfo