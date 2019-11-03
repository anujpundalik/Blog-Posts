import JsonPlaceHolder from '../api/JsonPlaceHolder';

export const fetchPosts = () => async dispatch => {
    
    const response = await JsonPlaceHolder.get('/posts');
    
    dispatch ({ 
        type : 'FETCH_POSTS',
        payload : response.data
    });
    
};