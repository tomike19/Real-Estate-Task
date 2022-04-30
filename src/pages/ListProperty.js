/* eslint-disable no-template-curly-in-string */
import NavDefaultLayout from '../layouts/NavDefaultLayout'
import { useProperties } from '../hooks/use-properties'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const ListProperty = ({
  image,
  propertytitle,
  propertylocation,
  propertybedroom,
  propertytoilet,
  propertyId,
}) => {
  return (
    <div className="list-property__properties">
      <div className="card">
        <img src={image} alt="cardimage" className="card-image" />
        <div className="card-body">
          <h6>{propertytitle}</h6>
          <div className="property-details d-flex">
            <i className="bi bi-geo-alt"></i>
            <p>{propertylocation}</p>
          </div>
          <div></div>
          <div
            className="property-details-image d-flex
                justify-content-between"
          >
            <p>
              <i className="bi bi-arrow-down-circle"></i>
              {propertybedroom}
              <p>Bedroom</p>
            </p>
            <p>
              <i className="bi bi-bookmark-plus"></i>
              {propertytoilet}
              <p>Toilets</p>
            </p>
          </div>
          <Link to={`/${propertyId}`}>
            <button type="button" className="list-property__viewMore ml-5">
              View More
            </button>
          </Link>

          <Link to={`/?edit=${propertyId}`}>
            <button type="button" className="list-property__viewMore">
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

const ListPropertyPage = () => {
  // add bedroom, kitchen and owner filter here
  const [params] = useState({})
  const properties = useProperties(params)
  return (
    <>
      <NavDefaultLayout>
        <div className="list-property">
          <div className="list-property__header">
            <h1 className="text-center">PROPERTIES</h1>
          </div>
          <div className="list-property__property-form">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-12">
                <div class="row mt-5">
                  <div class="input-wrap input-group">
                    <input
                      class="form-control  search-input input"
                      type="search"
                      value="Find a property by address"
                      id="example-search-input"
                    />
                    <span className="input-group-append">
                      <button
                        class="btn btn-outline- list-property__button bg-white ms-n5 mt-2"
                        type="button"
                      >
                        <i className="bi bi-search pt-3"></i>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-12 mt-5">
                <div className="input-wrap d-flex flex-column filter-select">
                  <select
                    defaultValue=""
                    className="form-select input"
                    name="property-type"
                    type="text"
                    aria-label="Default                                                      select example"
                  >
                    <option value="">Filtered by</option>
                    <option>Bathrooms</option>
                    <option>Bedrooms</option>
                    <option>Owners</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="list-property__properties">
            <h1>FEATURED PROPERTY</h1>
            <div className="list-property__properties-details">
              <div className="row">
                {properties.map((property) => {
                  const [image] = property.images
                  const { bedroom, type } = property

                  return (
                    <div className="col-lg-4" key={property._id}>
                      <ListProperty
                        image={(image && image.path) || '/images/property3.jpg'}
                        propertytitle={`${bedroom} bedroom ${type}`}
                        propertylocation={property.address}
                        propertybedroom={bedroom}
                        propertytoilet={property.toilet}
                        propertyId={property._id}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </NavDefaultLayout>
    </>
  )
}

export default ListPropertyPage
