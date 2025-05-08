import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchAiResult} from '../../Redux/AiSlice'

const Ai = () => {
  const aiState = useSelector((state) => state.ai);
  const dispatch = useDispatch()
  return (
    <div>
    <center>
        <button onClick={(e) =>dispatch(fetchAiResult())}>
          Fetch Posts
        </button>

        {aiState.isLoading && <p>Loading...</p>}

        
        {aiState.isError && <p>Something went wrong!</p>}

        {aiState.data && (
          
            <ul>
              {aiState.data.map((post) => (
                <li key={post.id}>
                 <h1>{post.title}</h1>
                </li>
              ))}
            </ul>
        )}
      </center>
    </div>
  );
};

export default Ai;
