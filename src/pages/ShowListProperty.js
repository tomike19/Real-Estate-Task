import NavDefaultLayout from '../layouts/NavDefaultLayout'
import { useParams } from 'react-router'
import { useProperty } from '../hooks/use-property'

export const PropertyConditions = ({
  propertybedroom,
  propertyfeet,
  propertykitchen,
  propertybathrooms,
}) => {
  return (
    <div className="single-page-property__property-items">
      <div className="property-details d-flex">
        <i className="bi bi-geo-alt"></i>
        <p>{propertybedroom}</p>
      </div>
      <div className="property-details d-flex">
        <i className="bi bi-building"></i>
        <p>{propertyfeet}</p>
      </div>
      <div className="property-details d-flex">
        <i className="bi bi-hospital"></i>
        <p>{propertykitchen}</p>
      </div>
      <div className="property-details d-flex">
        <i className="bi bi-door-open"></i>
        <p>{propertybathrooms}</p>
      </div>
    </div>
  )
}

export const PropertyDetails = ({ detailstitle, detailstext }) => {
  return (
    <div className="single-page-property__propertyCard">
      <div className="media block-6 services py-2 d-block text-center">
        <div>
          <div className="d-flex justify-content-center">
            <div className="icon"></div>
          </div>
        </div>
        <div className="media-body p-2 mt-2">
          <i className="bi bi-geo-alt icon"></i>
          <h5>{detailstitle}</h5>
          <p>{detailstext}</p>
        </div>
      </div>
    </div>
  )
}

const ShowListProperty = () => {
  const { id } = useParams()
  const property = useProperty(id)

  if (!property) {
    return null
  }

  return (
    <>
      <NavDefaultLayout>
        <div className="single-page-property">
          <div
            id="carouselExampleCaptions"
            className="carousel slide carousel-image"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              {property.images.map((image, i) => {
                return (
                  <button
                    key={image.path}
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={i}
                    className={i === 0 ? 'active' : ''}
                    aria-current={i === 0 ? 'true' : 'false'}
                    aria-label={`Slide ${i + 1}`}
                  ></button>
                )
              })}
            </div>
            <div className="carousel-inner">
              {property.images.map((image, i) => {
                return (
                  <div
                    className={`carousel-item${i === 0 ? ' active' : ''}`}
                    key={image.filename}
                  >
                    <img
                      src={image.path}
                      className="d-block w-100
                        carousel-image"
                      alt="..."
                    />
                  </div>
                )
              })}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="row d-flex">
            <div className="col-md-3">
              <PropertyDetails
                detailstitle="Find Places Anywhere In The World"
                detailstext="A small river named Duden flows by their place and supplies."
              />
            </div>
            <div className="col-md-3">
              <PropertyDetails
                detailstitle="We Have Agents With Experience"
                detailstext="A small river named Duden flows by their place and supplies."
              />
            </div>
            <div className="col-md-3">
              <PropertyDetails
                detailstitle="Buy & Rent Modern Properties"
                detailstext="A small river named Duden flows by their place and supplies."
              />
            </div>
            <div className="col-md-3">
              <PropertyDetails
                detailstitle="Making Money"
                detailstext="A small river named Duden flows by their place and supplies."
              />
            </div>
          </div>

          <div className="single-page-property__description">
            <div className="single-page-property__description-details">
              <div className="row single-property-section">
                <div className="col-lg-12 py-5 single-property-condition">
                  <h6>Conditions</h6>
                  <h4>
                    {property.bedroom} bedroom {property.type}
                  </h4>
                  <p className="">{property.description}</p>
                  <PropertyConditions
                    propertyfeet={`${property.sittingRoom} sittingRooms`}
                    propertybedroom={`${property.bedroom} bedrooms`}
                    propertykitchen={`${property.kitchen} Kitchens`}
                    propertybathrooms={`${property.bathroom} bathrooms`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavDefaultLayout>
    </>
  )
}

export default ShowListProperty
