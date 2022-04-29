import React from 'react'
import NavDefaultLayout from '../layouts/NavDefaultLayout'
import SingleKitchen from '../assets/images/singlekitchen.jpg'
import SingleBedroom from '../assets/images/singlebedroom.jpg'
import SingleBathroom from '../assets/images/heroimage.jpg'

export const PropertyConditions = ({
  propertygarage,
  propertybedroom,
  propertyfeet,
  propertykitchen,
  propertybathrooms,
}) => {
  return (
    <div>
      <div class="property-details d-flex">
        <i class="bi bi-geo-alt"></i>
        <p>{propertygarage}</p>
      </div>
      <div class="property-details d-flex">
        <i class="bi bi-geo-alt"></i>
        <p>{propertybedroom}</p>
      </div>
      <div class="property-details d-flex">
        <i class="bi bi-building"></i>
        <p>{propertyfeet}</p>
      </div>
      <div class="property-details d-flex">
        <i class="bi bi-hospital"></i>
        <p>{propertykitchen}</p>
      </div>
      <div class="property-details d-flex">
        <i class="bi bi-door-open"></i>
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
          <i class="bi bi-geo-alt icon"></i>
          <h5>{detailstitle}</h5>
          <p>{detailstext}</p>
        </div>
      </div>
    </div>
  )
}
const ShowListProperty = () => {
  return (
    <>
      <NavDefaultLayout>
        <div className="single-page-property">
          <div
            id="carouselExampleCaptions"
            class="carousel slide carousel-image"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src={SingleKitchen}
                  class="d-block w-100
                        carousel-image"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img src={SingleBedroom} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img
                  src={SingleBathroom}
                  class="d-block w-100
                        center"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
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
            <div class="single-page-property__description-details">
              <h6>Description</h6>
              <p>
                Haven ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et lore magna iqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut quipx ea codo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolo.Haven ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et lore magna iqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut quipx
                ea codo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolo
              </p>
              <div class="row single-property-section">
                <div class="col-lg-6 py-5 single-property-condition">
                  <h6>Conditions</h6>
                  <PropertyConditions
                    propertygarage="Garage 2"
                    propertyfeet="550ft"
                    propertybedroom="3 bedrooms"
                    propertykitchen="4 Kitchens"
                    propertybathrooms="5 bathrooms"
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
