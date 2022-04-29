import React from 'react'
import NavDefaultLayout from '../layouts/NavDefaultLayout'
import SingleKitchen from '../assets/images/singlekitchen.jpg'
import SingleBedroom from '../assets/images/singlebedroom.jpg'
import SingleBathroom from '../assets/images/heroimage.jpg'



export const ShowSinglePage=({propertygarage,
  propertybedroom,
  propertyfeet,
  propertykitchen,
  propertybathrooms
}) => {
  return (
    <h1></h1>
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
          <div className="single-page-property__description">
            <div class="single-page-property__description-details">
              <h6>Description</h6>
            </div>
          </div>
        </div>
      </NavDefaultLayout>
    </>
  )
}

export default ShowListProperty
