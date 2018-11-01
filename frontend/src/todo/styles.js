

export const styles = theme => ({
  flexContainer: {
    display: "flex",
    marginRight: "30px",
    "& >div": {
      color: "white",
      margin: "10px",
      textAlign: "center",
      lineHeight: "75px",
      fontSize: "30px"
    }
  },
  flexTextField: {
    flexGrow: 8,
    paddingLeft: "20px"
  },
  markAsDone: {
    textDecoration: "line-through",
    color: "#aaa"
  },
  removeButton: {
    marginRight: "30px"
  }
});