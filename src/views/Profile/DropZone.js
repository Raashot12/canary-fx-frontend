import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import { DropzoneDialog } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    previewChip: {
      minWidth: 160,
      maxWidth: 210,
    },
  })
);

const initialState = {
  open: false,
  files: [],
};

const Dropzone = (props) => {
  const classes = useStyles();

  const [state, setState] = useState(initialState);

  const handleClose = () => {
    setState({
      open: false,
    });
  };

  const handleSave = (files) => {
    //Saving files to state for further use and closing Modal.
    setState({
      files: files,
      open: false,
    });
  };

  const handleOpen = () => {
    setState({
      open: true,
    });
  };

  return (
    <div style={{ color: "black" }}>
      <Button onClick={handleOpen}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={classes.dropIcon} style={{ margin: "10px" }}>
            <CloudUploadIcon style={{ fontSize: 50 }} />
          </div>
          <div style={{ margin: "10px" }}>
            <Typography variant="body1" gutterBottom>
              Upload ID
            </Typography>
          </div>
        </div>
      </Button>
      <div style={{ margin: "1rem 0" }}>
        <Typography variant="body1" gutterBottom>
          Max file size: 5MB
        </Typography>
      </div>
      <DropzoneDialog
        open={state.open}
        onSave={handleSave}
        acceptedFiles={["image/jpeg", "image/png", "image/bmp", "pdf"]}
        showPreviews={true}
        maxFileSize={5000000}
        filesLimit={1}
        onClose={handleClose}
        useChipsForPreview
        previewGridProps={{ container: { spacing: 1, direction: "row" } }}
        previewChipProps={{ classes: { root: classes.previewChip } }}
      />
    </div>
  );
};

export default Dropzone;
