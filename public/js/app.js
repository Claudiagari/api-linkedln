function onLinkedInLoad() {
  
  IN.Event.on(IN, 'auth', getProfileData);
}

// Handle the successful return from the API call
function onSuccess(data) {
}

function response(data) {
 
}

// Handle an error response from the API call
function onError(error) {
  console.log(error);
}

// Use the API call wrapper to request the member's basic profile data
function getProfileData() {
  
  window.location.href = 'views/profile.html';
  IN.API.Raw('/people/~:(id,num-connections,picture-url)').result(onSuccess).error(onError);
  
};
