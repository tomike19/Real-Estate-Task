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
              <Input
                label="Property Type"
                placeholder="Enter your text"
                type="text"
                name="property-type"
              />
            </div>
            <div className="col-md-6 col-lg-6 col-12">
              <Input
                label="Number of Bathrooms"
                placeholder="Enter your text"
                type="text"
                name="Number of Bathrooms"
              />
            </div>
            <div className="col-md-6 col-lg-6 col-12">
              <Input
                label="Enter your text"
                placeholder="Enter your text"
                type="text"
                name="text"
              />
            </div>
            <div className="col-md-6 col-lg-6 col-12">
              <Input
                label="Number of Toilets"
                placeholder="Enter your text"
                type="text"
                name="Number of Toilets"
              />
            </div>
            <div className="col-md-6 col-lg-6 col-12">
              <Input
                label="Enter your text"
                placeholder="Enter your text"
                type="text"
                name="text"
              />
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
