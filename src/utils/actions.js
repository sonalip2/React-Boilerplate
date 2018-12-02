export const getPostValues = (posts) => {
    //console.log('in action');
    return {
      type: 'GET_POSTS',
      payload: posts
    }
  }