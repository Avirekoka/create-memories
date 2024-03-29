import React from "react";
import Post from "./Post/Post";
import useStyles from "./style";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

function Posts({ setCurrentId }) {
  const classes = useStyles();

  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => {
        return (
          <Grid xs={12} sm={6} key={post._id} item>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Posts;
