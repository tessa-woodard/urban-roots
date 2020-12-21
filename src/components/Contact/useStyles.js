import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles(theme => ({
  first: {
    padding: "130px 0",
    height: "100%",
    textAlign: "center",
    backgroundImage:
      "url('https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/contact-us.jpeg?raw=true')",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      backgroundPosition: "right",
    },
  },

  title: {
    fontSize: 80,
    fontWeight: 600,
    margin: 0,
    fontFamily: "'Playfair Display', serif",
    color: "white",
  },

  second: {
    display: "flex",
    justifyContent: " space-around",
    margin: "80px 0",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  text: {
    width: "38%",
    [theme.breakpoints.down("md")]: {
      width: "60%",
      marginBottom: 20,
    },
  },

  flowers: {
    color: "olivedrab",
  },

  secondTitle: {
    fontSize: "2.3em",
    justifyContent: "center",
    lineHeight: "1.4em",
    marginBottom: 40,
    fontFamily: "'Playfair Display', serif",
    letterSpacing: "1.1px",
    marginTop: 0,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.7em",
    },
  },

  imgBlock: {
    width: "38%",
    backgroundImage:
      'url("https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/contact-us2.jpeg?raw=true")',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      width: "60%",
      height: 350,
    },
  },
}))
