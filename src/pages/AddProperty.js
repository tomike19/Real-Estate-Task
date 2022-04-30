import React, { useState } from "react";
import NavDefaultLayout from "../layouts/NavDefaultLayout";
import { Input } from "./../components/input/Input";
import { BtnLarge } from "./../components/button/button";
import { Formik } from "formik";
import ValidationSchema, {
  updateValueValidationSchema,
} from "../helpers/ValidationSchema";
import pick from "lodash.pick";
import { useQuery } from "../hooks/use-query";
import { useAddPropertyLogic } from "../hooks/use-add-property-logic";
import { useProperty } from "../hooks/use-property";

const AddProperty = ({ error }) => {
  const [file, setFile] = useState(null);
  const [handleSubmit] = useAddPropertyLogic(file);
  const { edit } = useQuery();
  const property = useProperty(edit);

  return (
    <>
      <NavDefaultLayout>
        <div className="add-property container">
          <div className="add-property__header">
            <h1>Add Property Information</h1>
          </div>
          <Formik
            key={JSON.stringify(property)}
            initialValues={
              property
                ? pick(property, [
                    "_id",
                    "bedroom",
                    "sittingRoom",
                    "kitchen",
                    "bathroom",
                    "toilet",
                    "description",
                  ])
                : {
                    address: "",
                    type: "",
                    bedroom: "",
                    sittingRoom: "",
                    kitchen: "",
                    bathroom: "",
                    toilet: "",
                    propertyOwner: "",
                    description: "",
                    validFrom: "",
                    validTo: "",
                    images: [],
                  }
            }
            validationSchema={
              property
                ? updateValueValidationSchema
                : ValidationSchema
            }
            onSubmit={handleSubmit}
          >
            {(props) => {
              const {
                handleSubmit,
                handleChange,
                errors,
                touched,
                values,
                handleBlur,
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    {!values._id && (
                      <div className="col-md-6 col-lg-6 col-12">
                        <Input
                          label="Property Address"
                          placeholder="Enter your address"
                          type="text"
                          name="address"
                          value={values.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.address && errors.address}
                        />
                      </div>
                    )}
                    {!values._id && (
                      <div className="col-md-6 col-lg-6 col-12">
                        <Input
                          label="Property Type"
                          placeholder="Property Type"
                          type="text"
                          name="type"
                          value={values.type}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.type && errors.type}
                        />
                      </div>
                    )}
                    <div className="col-md-6 col-lg-6 col-12">
                      <Input
                        label=" Number of Bathrooms"
                        placeholder="Number of Bathrooms"
                        type="text"
                        value={values.bathroom}
                        name="bathroom"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.bathroom && errors.bathroom}
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-12">
                      <Input
                        label=" Number of Kitchens"
                        placeholder="Number of Kitchens"
                        type="text"
                        name="kitchen"
                        value={values.kitchen}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.kitchen && errors.kitchen}
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-12">
                      <Input
                        label=" Number of Toilets"
                        placeholder="Number of Toilets"
                        type="text"
                        name="toilet"
                        value={values.toilet}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.toilet && errors.toilet}
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-12">
                      <Input
                        label=" Number of SittingRooms"
                        placeholder="Enter your Name"
                        type="text"
                        value={values.sittingRoom}
                        name="sittingRoom"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.sittingRoom && errors.sittingRoom}
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-12">
                      <Input
                        label=" Number of Bedrooms"
                        placeholder=" Number of Bedrooms"
                        type="text"
                        name="bedroom"
                        value={values.bedroom}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.bedroom && errors.bedroom}
                      />
                    </div>
                    {!values._id && (
                      <div className="col-md-6 col-lg-6 col-12">
                        <Input
                          label="property Owner"
                          placeholder="Enter your Name"
                          type="text"
                          value={values.propertyOwner}
                          name="propertyOwner"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.propertyOwner && errors.propertyOwner}
                        />
                      </div>
                    )}
                    {!values._id && (
                      <div className="col-md-6 col-lg-6 col-12">
                        <Input
                          label="Valid From"
                          id="valid to"
                          name="validFrom"
                          placeholder="dd-mm-yyyy"
                          type="date"
                          value={values.validFrom}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.validFrom && errors.validFrom}
                        />
                      </div>
                    )}
                    {!values._id && (
                      <div className="col-md-6 col-lg-6 col-12">
                        <Input
                          label="Valid To"
                          id="valid to"
                          name="validTo"
                          value={values.validTo}
                          placeholder="dd-mm-yyyy"
                          type="date"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.validTo && errors.validTo}
                        />
                      </div>
                    )}
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
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          {values.description}
                        </textarea>
                        <label for="floatingTextarea">Description</label>
                      </div>
                    </div>
                    {!values._id && (
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
                            onChange={(event) => {
                              const [file] = event.target.files;
                              setFile(file);
                            }}
                            name="image"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="add-property__footer">
                    <BtnLarge
                      type="submit"
                      //  to={RouteLinks.login}
                      label={values._id ? "Update Property" : "Add Property"}
                    />
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </NavDefaultLayout>
    </>
  );
};

export default AddProperty;



