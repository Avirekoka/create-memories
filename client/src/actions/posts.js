import * as api from "../api/index";
import { CREATE, DELETE, FETCH, LIKE, UPDATE } from "../constants/actionsTypes";
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    console.log(post);
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (currentId, postData) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(currentId, postData);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (currentId) => async (dispatch) => {
  try {
    await api.deletePost(currentId);

    dispatch({ type: DELETE, payload: currentId });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (currentId) => async (dispatch) => {
  try {
    const { data } = await api.likePost(currentId);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
