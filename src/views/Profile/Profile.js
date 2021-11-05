import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Avatar, Typography } from "@material-ui/core";
// @material-ui/core component
import { makeStyles } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Dropzone from "./DropZone";

import Textfield from "components/FormsUI/Textfield/Textfield.js";
import Button from "components/FormsUI/Button/Button.js";
import RadioButton from "components/FormsUI/RadioButton/RadioButton.js";

const useStyles = makeStyles((theme) => ({
  profileWrapper: {
    marginBottom: theme.spacing(0),
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icon: {
    backgroundColor: blueGrey,
    margin: " 1rem 2rem",
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  avatar: {},
  header: {
    // padding: ""
  },
  title: {
    color: "#91919c",
    fontSize: 16,
    fontWeight: 600,
  },
  username: {
    color: "#20B8EB",
    fontSize: 20,
    fontWeight: 700,
  },
  formWrapper: {
    // marginBottom: theme.spacing(8),
  },
  Textfield: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  formLabelandInput: {
    display: "flex",
    flex: "auto",
    justifyContent: "space-between",
    alignItems: "baseline",
    margin: "1rem 1rem",
  },
  formAddress: {
    display: "flex",
    flex: "auto",
    justifyContent: "flex-start",
    alignItems: "baseline",
    margin: "1rem 1rem",
  },
  addressLabel: {
    width: "14%",
    fontWeight: 600,
    fontSize: 16,
    [theme.breakpoints.down("xs")]: {
      width: "30%",
      marginRight: "10px",

      fontSize: 15,
    },
    [theme.breakpoints.down("sm")]: {
      width: "30%",
      marginRight: "10px",
      fontSize: 15,
    },
  },
  addressInput: {
    flex: "1",
  },
  label: {
    width: "30%",
    fontWeight: 600,
    fontSize: 16,
    [theme.breakpoints.down("xs")]: {
      marginRight: "10px",
      fontSize: 15,
    },
  },
  input: {
    flex: "1",
  },
  identity: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  identityNumber: {
    display: "flex",
    flex: "auto",
    alignItems: "baseline",
    margin: "1rem auto",
  },
  identitylabel: {
    width: "30%",
    fontWeight: 600,
    fontSize: 16,
    [theme.breakpoints.down("xs")]: {
      marginRight: "10px",
      fontSize: 15,
    },
  },
  labelInput: {
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      flex: "1",
      fontSize: 15,
    },
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  fileUpload: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem 3rem",
    borderRadius: "25px",
    border: "2px dotted #91919c",
    [theme.breakpoints.down("xs")]: {
      margin: "0",
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "50%",
      margin: "0 auto",
    },
  },
}));

const options = [
  {
    id: 1,
    value: "internationalPassport",
    label: "International Passport",
  },
  {
    id: 2,
    value: "nationalIdCard",
    label: "national ID Card",
  },
  {
    id: 3,
    value: "driverLicences",
    label: "Driver Licences",
  },
  {
    id: 4,
    value: "voterCard",
    label: "Voter's Card",
  },
];

const INITIAL_FORM_STATE = {
  email: "",
  phone: "",
  addressLine: "",
};

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string().email("Invalid email.").required("Required"),
  phone: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .required("Required"),
  addressLine: Yup.string().required("Required"),
});

export default function Profile() {
  const classes = useStyles();

  return (
    <GridContainer>
      <GridItem item xs={12} style={{ display: "flex", flexDirection: "row" }}>
        <div className={classes.profileWrapper}>
          <div className={classes.avatar}>
            <Avatar alt="alt" variant="circle" className={classes.icon} />
          </div>
          <div className={classes.header}>
            <Typography gutterBottom className={classes.title}>
              Title
            </Typography>
            <Typography gutterBottom className={classes.username}>
              User Name
            </Typography>
          </div>
        </div>
      </GridItem>
      <GridItem item xs={12}>
        <div className={classes.formWrapper}>
          <Formik
            initialValues={{
              ...INITIAL_FORM_STATE,
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form autoComplete="off">
              <div className={classes.Textfield}>
                <GridItem
                  xs={12}
                  sm={6}
                  md={6}
                  class={classes.formLabelandInput}
                >
                  <label for="email" className={classes.label}>
                    Email
                  </label>
                  <Textfield
                    name="email"
                    label="Email"
                    className={classes.input}
                  />
                </GridItem>
                <GridItem
                  xs={12}
                  sm={6}
                  md={6}
                  class={classes.formLabelandInput}
                >
                  <label for="phone" className={classes.label}>
                    Phone No
                  </label>
                  <Textfield
                    name="phone"
                    label="Phone"
                    className={classes.input}
                  />
                </GridItem>
              </div>
              <div className={classes.Textfield}>
                <GridItem
                  xs={12}
                  sm={6}
                  md={6}
                  class={classes.formLabelandInput}
                >
                  <label for="profession" className={classes.label}>
                    Profession
                  </label>
                  <Textfield
                    name="profession"
                    label="Profession"
                    className={classes.input}
                  />
                </GridItem>
                <GridItem
                  xs={12}
                  sm={6}
                  md={6}
                  class={classes.formLabelandInput}
                >
                  <label for="sourceOfFund" className={classes.label}>
                    Source Of Fund
                  </label>
                  <Textfield
                    name="sourceOfFund"
                    label="Source Of Fund"
                    className={classes.input}
                  />
                </GridItem>
              </div>
              <div>
                <GridItem item xs={12} class={classes.formAddress}>
                  <label for="Address" className={classes.addressLabel}>
                    Address
                  </label>
                  <Textfield
                    name="Address"
                    multiline
                    rows={4}
                    label="Address Line...."
                    className={classes.addressInput}
                  />
                </GridItem>
              </div>
              <div style={{ margin: "2rem auto" }}>
                <GridItem
                  item
                  xs={12}
                  gutterBottom
                  style={{ margin: "0.5rem auto" }}
                >
                  <Typography
                    gutterBottom
                    variant="body1"
                    style={{ fontSize: "1.3rem" }}
                  >
                    Identification
                  </Typography>
                </GridItem>
                <GridItem>
                  <Typography gutterBottom variant="body2">
                    Select a means of Identification
                  </Typography>
                  <GridItem item xs={12}>
                    <Field
                      name="identification"
                      options={options}
                      component={RadioButton}
                    />
                  </GridItem>
                </GridItem>
                <div className={classes.identity}>
                  <GridItem xs={12} sm={12} md={6}>
                    <GridItem
                      xs={12}
                      sm={6}
                      md={6}
                      class={classes.identityNumber}
                    >
                      <label for="idNumber" className={classes.identitylabel}>
                        ID Number
                      </label>
                      <Textfield
                        name="idNumber"
                        label="ID Number"
                        className={classes.labelInput}
                      />
                    </GridItem>
                    <GridItem
                      xs={12}
                      sm={6}
                      md={6}
                      class={classes.identityNumber}
                    >
                      <label for="issueDate" className={classes.identitylabel}>
                        Issue Date
                      </label>
                      <Textfield
                        name="issueDate"
                        label="Issue Date"
                        className={classes.labelInput}
                      />
                    </GridItem>
                    <GridItem
                      xs={12}
                      sm={6}
                      md={6}
                      class={classes.identityNumber}
                    >
                      <label for="expiryDate" className={classes.identitylabel}>
                        Expiry Date
                      </label>
                      <Textfield
                        name="expiryDate"
                        label="Expiry Date"
                        className={classes.labelInput}
                      />
                    </GridItem>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <div className={classes.fileUpload}>
                      <GridItem item xs={12} md={12} sm={12}>
                        <div className={classes.fileUploadGrid}>
                          <Dropzone />
                        </div>
                      </GridItem>
                    </div>
                  </GridItem>
                </div>
              </div>
              <GridItem
                item
                xs={12}
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <div className={classes.button}>
                  <Button className="button-upload">Save Change</Button>
                </div>
              </GridItem>
            </Form>
          </Formik>
        </div>
      </GridItem>
    </GridContainer>
  );
}
