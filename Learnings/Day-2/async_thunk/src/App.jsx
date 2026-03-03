import {useDispatch, useSelector} from "react-redux"
import { fetchPosts } from "./postsThunk"
import { store } from "./store_async";
import { useState } from "react";
function Posts(){
  const dispatch = useDispatch();
  const {data, status, error} = useSelector((state) => state.posts);

  return(
    <div>
      <button onClick={() => dispatch(fetchPosts())}>Load Posts</button>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error:{error}</p>}

      {status === "succeeded" && 
      data.slice(0, 5).map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}

export default Posts;