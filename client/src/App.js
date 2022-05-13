import React, { useEffect, useState } from "react";
import { Container, Grow, Grid, Typography, AppBar } from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./style";
import { getPosts } from "./actions/posts";
import { useDispatch } from "react-redux";
import memories from "./images/memories.png";
function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="primary" className={classes.appBar}>
        <Typography variant="h2" align="center" className={classes.heading}>
          Memories
        </Typography>
        <img
          src={memories}
          height="60"
          alt="Memories"
          className={classes.image}
        />
      </AppBar>

      {/* 
        Grow -> For animation
        Grid -> For responsive layouts
        Container -> For the Layer
      */}
      <Grow in>
        <Container>
          <Grid
            className={classes.mainCotainer}
            container
            spacing={3}
            justifyContent="space-between"
            alignItems="stretch"
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form setCurrentId={setCurrentId} currentId={currentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
