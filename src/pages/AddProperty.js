import React from 'react'
import NavDefaultLayout from '../layouts/NavDefaultLayout'
import { Input } from './../components/input/Input'
import { BtnLarge } from './../components/button/button'

const AddProperty = () => {
  return (
    <>
      <NavDefaultLayout>
        <div className="add-property container">
          <div className="add-property__header">
            <h1>Add Property Information</h1>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-12">
              <Input
                label="Property Address"
                placeholder="Enter your address"
                type="text"
                name="Property-address"
              />
            </div>
            <div className="col-md-6 col-lg-6 col-12">
              <div className="input-wrap d-flex flex-column">
                <label className="input-label">Property type</label>
                <select
                  class="form-select input"
                  name="property-type"
                  type="text"
                  aria-label="Default                                                      select example"
                >
                  <option selected>Property Type</option>
                  <option>Duplex</option>
                  <option>Bungalow</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-12">
              <div className="input-wrap d-flex flex-column">
                <label className="input-label">Number of Bathrooms</label>
                <select
                  class="form-select input"
                  name="property-type"
                  type="text"
                  aria-label="Default                                                      select example"
                >
                  <option selected> Number of Bathrooms</option>
                  <option>Bathrooms 1</option>
                  <option>Bathrooms 2</option>
                  <option>Bathrooms 3</option>
                  <option>Bathrooms 4</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-12">
              <div className="input-wrap d-flex flex-column">
                <label className="input-label">Number of Kitchens</label>
                <select
                  class="form-select input"
                  name="property-type"
                  type="text"
                  aria-label="Default                                                      select example"
                >
                  <option selected> Number of Kitchens</option>
                  <option>Kitchen 1</option>
                  <option>Kitchen 2</option>
                  <option>Kitchen 3</option>
                  <option>Kitchen 4</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-12">
              <div className="input-wrap d-flex flex-column">
                <label className="input-label">Number of Toilets</label>
                <select
                  class="form-select input"
                  name="property-type"
                  type="text"
                  aria-label="Default                                                      select example"
                >
                  <option selected> Number ofToilets</option>
                  <option>Toilets 1</option>
                  <option>Toilets 2</option>
                  <option>Toilets 3</option>
                  <option>Toilets 4</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-12">
              <div className="input-wrap d-flex flex-column">
                <label className="input-label">Number of SittingRooms</label>
                <select
                  class="form-select input"
                  name="property-type"
                  type="text"
                  aria-label="Default                                                      select example"
                >
                  <option selected> Number of SittingRooms</option>
                  <option>SittingRooms 1</option>
                  <option>SittingRooms 2</option>
                  <option>SittingRooms 3</option>
                  <option>SittingRooms 4</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-12">
              <Input
                label="Property Owner"
                placeholder="Enter your Name"
                type="text"
                name="Property Owner"
              />
            </div>
            <div className="col-md-6 col-lg-6 col-12">
              <Input
                label="Valid From"
                id="valid to"
                name="valid to"
                placeholder="dd-mm-yyyy"
              />
            </div>
            <div className="col-md-6 col-lg-6 col-12">
              <Input
                label="Valid From"
                id="valid to"
                name="valid to"
                placeholder="dd-mm-yyyy"
              />
            </div>
            <div class="col-lg-12 col-12 mt-5">
              <div class="form-floating">
                <textarea
                  name="description"
                  class="form-control
                    mb-5"
                  type="text"
                  placeholder="Leave a
                   comment here"
                  id="floatingTextarea"
                ></textarea>
                <label for="floatingTextarea">Description</label>
              </div>
            </div>
            <div
              class="add-property-box
              step-3 input-file"
            >
              <div class="input-file">
                <label for="" className="input-label">
                  Upload Property Images
                </label>
                <input
                  class="form-control
                  form-control-lg"
                  id="formFileLg"
                  type="file"
                  name="image"
                />
              </div>
            </div>
          </div>
          <div className="add-property__footer">
            <BtnLarge
              type="submit"
              //  to={RouteLinks.login}
              label="Add Property"
            />
          </div>
        </div>
      </NavDefaultLayout>
    </>
  )
}

export default AddProperty
