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
                  <div class="input-wrap input-group">
                    <input
                      class="form-control  search-input input"
                      type="search"
                      value="Find a property by address"
                      id="example-search-input"
                    />
                    <span class="input-group-append">
                      <button
                        class="btn btn-outline- list-property__button bg-white ms-n5 mt-2"
                        type="button"
                      >
                        <i class="bi bi-search pt-3"></i>
                      </button>
                    </span>
                  </div>
                </div>
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
