import $ from 'jquery'

export default function editStudent(formData) {
  return function(dispatch) {
    $.ajax({
      type: 'PATCH',
      url: 'http://localhost:3000/api/students',
      headers: {authorization: localStorage.getItem('jwt')},
      data: JSON.stringify({student: formData}),
      contentType: 'application/json; charset=utf-8',
      datatype: 'json'
    }).done((response) => {
      if(response.error){
        console.log(response.error)
      } else {
        dispatch({type: 'UPDATE_STUDENT', payload: response.student})
      }
    })
  }
}