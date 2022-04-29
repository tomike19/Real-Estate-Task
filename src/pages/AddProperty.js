import React from 'react'
import NavDefaultLayout from '../layouts/NavDefaultLayout'
import { Input } from './../components/input/Input'
import { BtnLarge } from './../components/button/button'
import { Formik } from 'formik'
import inputValueValidationSchema from '../helpers/ValidationSchema'

const AddProperty = ({ error }) => {
  return (
    <>
      <NavDefaultLayout>
        <div className="add-property container">
          <div className="add-property__header">
            <h1>Add Property Information</h1>
          </div>
          <Formik
            initialValues={{
              propertyAddress: '',
              propertyType: '',
              numberOfBathrooms: '',
              numberOfKitchens: '',
              numberOfToilets: '',
              numberOfSittingrooms: '',
              propertyOwner: '',
              validFrom: '',
              validTo: '',
            }}
            validationSchema={inputValueValidationSchema}
          >
            {(props) => {
              const {
                handleSubmit,
                handleChange,
                errors,
                touched,
                handleBlur,
              } = props
              return (
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-12">
                      <Input
                        label="Property Address"
                        placeholder="Enter your address"
                        type="text"
                        name="propertyAddress"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.propertyAddress && errors.propertyAddress
                        }
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-12">
                      <Input
                        label="Property Type"
                        placeholder="Property Type"
                        type="text"
                        name="Property Type"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.propertyType && errors.propertyType}
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-12">
                      <Input
                        label=" Number of Bathrooms"
                        placeholder="Number of Bathrooms"
                        type="text"
                        name=" Number of Bathrooms"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.numberOfBathrooms && errors.numberOfBathrooms
                        }
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-12">
                      <Input
                        label=" Number of Kitchens"
                        placeholder="Number of Kitchens"
                        type="text"
                        name=" Number of Kitchens"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.numberOfKitchens && errors.numberOfKitchens
                        }
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-12">
                      <Input
                        label=" Number of Toilets"
                        placeholder="Number of Toilets"
                        type="text"
                        name=" Number of Toilets"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.numberOfToilets && errors.numberOfToilets
                        }
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-12">
                      <Input
                        label=" Number of SittingRooms"
                        placeholder="Enter your Name"
                        type="text"
                        name=" Number of SittingRooms"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.numberOfSittingrooms &&
                          errors.numberOfSittingrooms
                        }
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-12">
                      <Input
                        label="property Owner"
                        placeholder="Enter your Name"
                        type="text"
                        name="propertyOwner"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.propertyOwner && errors.propertyOwner}
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-12">
                      <Input
                        label="Valid From"
                        id="valid to"
                        name="validFrom"
                        placeholder="dd-mm-yyyy"
                        type="date"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.validFrom && errors.validFrom}
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-12">
                      <Input
                        label="Valid To"
                        id="valid to"
                        name="validTo"
                        placeholder="dd-mm-yyyy"
                        type="date"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.validTo && errors.validTo}
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
                </form>
              )
            }}
          </Formik>
        </div>
      </NavDefaultLayout>
    </>
  )
}

export default AddProperty
