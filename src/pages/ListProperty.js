import React from 'react'
import NavDefaultLayout from '../layouts/NavDefaultLayout'
import { Input } from '../components/input/Input'

const ListPropertyPage = () => {
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
        <div class="col-md-5">
            <div class="">rounded search input with icon</div>
            <div class="input-group">
                <input class="form-control border-end-0 border" type="search" value="search" id="example-search-input"/>
                <span class="input-group-append">
                    <button class="btn btn-outline-secondary bg-white border-start-0 border-bottom-0 border ms-n5" type="button">
                        <i class="fa fa-search"></i>
                    </button>
                </span>
            </div>
        </div>
    </div>
                {/* <Input
                  placeholder="Enter your address"
                  type="text"
                  name="Property-address"
                /> */}
              </div>
              <div className="col-md-6 col-lg-6 col-12 mt-5">
                <div className="input-wrap d-flex flex-column filter-select">
                  {/* <label className="input-label">Property type</label> */}
                  <select
                    class="form-select input"
                    name="property-type"
                    type="text"
                    aria-label="Default                                                      select example"
                  >
                    <option selected>Filtered by</option>
                    <option>Bathrooms</option>
                    <option>Kitchens</option>
                    <option>Owners</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavDefaultLayout>
    </>
  )
}

export default ListPropertyPage
