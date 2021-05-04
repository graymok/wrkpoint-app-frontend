import { NavLink } from 'react-router-dom'

const SpaceListing = (props) => {
    return (
        <>
            {props.spaces.map((space) => (
                <NavLink className="space-listing-nav" key={space.id} exact to={`/spaces/${space.id}`}>
                    <div className="space-listing-container">
                        <div className="space-listing-left">
                            <div className="space-listing-image-overlay">Click to reserve!</div>
                            <img className="space-listing-image" src={space.image} alt={space.name} />
                        </div>
                        <div className="space-listing-right">
                            <span className="space-listing-headline">{space.name} <span className="space-listing-headline-break">\</span> {space.type}</span>
                            <span className="space-listing-capacity">{space.capacity} 
                            { space.capacity === "1" ? <span className="space-listing-seats"> seat</span> : <span className="space-listing-seats"> seats</span> }</span>
                            <span className="space-listing-description">{space.description}</span>
                            
                        </div>
                    </div>
                </NavLink>
            ))}

        </>
    )
}

export default SpaceListing