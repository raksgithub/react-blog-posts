import jsonPlaceHolder from  '../apis/jsonPlaceHolder'

// Old Syntax without using Redux-thunk middleware

// export const fetchPosts = () => {
//     let response;
//     jsonPlaceHolder.get('/posts')
//         .then((res) => {
//             response = res;
//             console.log(response);
//         });
//     return {
//         type: 'FETCH_POSTS',
//         payload: response
//     }
// }

// New syntax using redux thunk middleware 

export const fetchPostsUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const userIds = [];
    //console.log(getState());
    getState().posts.forEach((post) => {
        if(!userIds.includes(post.userId)) {
            userIds.push(post.userId);
        } 
    });
    userIds.forEach((userId) => {
        if(userId !== undefined)
            dispatch(fetchUser(userId));
            //console.log(getState());
    });
}

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
}

export const fetchUser = (id) => (dispatch, getState) => {
    let response;
    jsonPlaceHolder.get(`/users/${id}`)
        .then((res) => {
            response = res.data;
            //console.log(getState());
            dispatch({
                type: 'FETCH_USER',
                payload: response
            });
            console.log(getState());
        });
}

//  With Asyn await
// export const fetchPosts = () => async dispatch => {
//     const response = await jsonPlaceHolder.get('/posts');
//     // console.log(response);
//     dispatch({
//         type: 'FETCH_POSTS',
//         payload: response.data
//     });
// }

