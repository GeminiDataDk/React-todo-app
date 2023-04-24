import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { DeleteContext } from "./context/ContextProvider";
import Alert from "react-bootstrap/Alert";

export default function ButtonAppBar() {
  const { deletetask, setDeletetask } = useContext(DeleteContext);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar style={{ background: "#4e342e" }} position="static">
          <Toolbar>
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ textAlign: "center" }}
            >
              <b>React-Redux ToDo App</b>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      {deletetask ? (
        <Alert
          variant="danger"
          onClose={() => setDeletetask(false)}
          dismissible
        >
          <Alert.Heading>Your Task Removed Successfully</Alert.Heading>
        </Alert>
      ) : (
        ""
      )}
    </>
  );
}
