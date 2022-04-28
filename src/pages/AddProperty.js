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
                label="Enter your email"
                placeholder="Enter your email"
                type="email"
                name="email"
              />
            </div>
            <div className="col-md-6 col-lg-6 col-12">
              <Input
                label="Enter your email"
                placeholder="Enter your email"
                type="email"
                name="email"
              />
            </div>
            <div className="col-md-6 col-lg-6 col-12">
              <Input
                label="Enter your email"
                placeholder="Enter your email"
                type="email"
                name="email"
              />
            </div>
            <div className="col-md-6 col-lg-6 col-12">
              <Input
                label="Enter your email"
                placeholder="Enter your email"
                type="email"
                name="email"
              />
            </div>
            <div className="col-md-6 col-lg-6 col-12">
              <Input
                label="Enter your email"
                placeholder="Enter your email"
                type="email"
                name="email"
              />
            </div>
            <div className="col-md-6 col-lg-6 col-12">
              <Input
                label="Enter your email"
                placeholder="Enter your email"
                type="email"
                name="email"
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
