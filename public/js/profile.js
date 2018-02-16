function onSuccess(data) {
  console.log(data);
  console.log(data.pictureUrl);
  $('#photo').attr('src', '' + data.pictureUrl + '');
  $('#name').text(data.firstName);
  $('#lastname').text(data.lastName);
  $('#headline').text(data.headline);
  $('#contac').text(data.numConnections);
  $('#link').attr('href', '' + data.siteStandardProfileRequest.url + '');
}
function onError(error) {
  console.log(error);
}
function getProfileData() {
  IN.API.Raw('/people/~:(id,num-connections,picture-url)').result(onSuccess).error(onError);
  IN.API.Raw('/people/~').result(onSuccess).error(onError);
}

$('#close').on('click', function() {
  IN.User.logout(onLogout);
});

function onLogout() {
  window.location.href = '../index.html';
}