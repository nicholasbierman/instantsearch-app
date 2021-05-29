const SET_INDEX_NAME = 'indexName/setIndexName';

export const setIndexName = (indexName) => ({
    type: SET_INDEX_NAME,
    payload: indexName
});

export const changeSearchIndex = (indexName) => async dispatch => {
    dispatch(setIndexName(indexName));
};

const initialState = { indexName: "nba-players" };

function reducer (state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_INDEX_NAME:
            newState = { ...state, indexName: action.payload };
            return newState;
        default:
            return state;
    };
};

export default reducer;