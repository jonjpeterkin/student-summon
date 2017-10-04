export default function setLoading(comp, isLoading) {
	return function(dispatch) {
		if(isLoading) {
			dispatch({type: 'LOADING', payload: comp})
		} else {
			dispatch({type: 'LOADED', payload: comp})
		}
	}
}