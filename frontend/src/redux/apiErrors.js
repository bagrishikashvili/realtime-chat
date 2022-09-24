import { setCurrentUser } from '@redux/actions/signin';
export default (store) => (next) => async (action) => {
    if (action.error && action.error.response && action.error.response.status === 401) {
        return (async () => {
            await localStorage.removeItem('access_token');
            await store.dispatch(setCurrentUser({}));
        })();
    }
    else {
        return next(action);
    }

}
