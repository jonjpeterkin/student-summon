import $ from 'jquery'
import setLoading from '../setLoading'

export default function editUser(formData) {
  return function(dispatch) {
    dispatch(setLoading('Profile', true))
    $.ajax({
      type: 'PATCH',
      url: 'http://localhost:3000/api/users',
      headers: {authorization: localStorage.getItem('jwt')},
      data: JSON.stringify({user: formData}),
      contentType: 'application/json; charset=utf-8',
      datatype: 'json'
    }).done((response) => {
      if(response.error){
        console.log(response.error)
      } else {
        dispatch({type: 'STORE_USER_INFO', payload: {
          currentUser: {
            id: response.user_id,
            email: response.email,
            fullName: response.full_name,
            profName: response.prof_name,
            job: response.job,
            roomId: response.room_id
          }
        }})
      dispatch(setLoading('Profile', false))
      }
    })
  }
}