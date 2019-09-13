import ShopActionTypes from './ShopTypes';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/FirebaseUtils';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCESSS,
  payload: collectionMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapShot => {
        const collectionMap = convertCollectionsSnapshotToMap(snapShot);
        dispatch(fetchCollectionsSuccess(collectionMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
