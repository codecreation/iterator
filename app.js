const data = [
  {
      name: 'John G',
      age: 24,
      gender: "male",
      lookingfor: "female",
      location: "San Diego CA",
      image: 'https://randomuser.me/api/portraits/men/82.jpg',

  },
  {
      name: 'Jen S',
      age: 22,
      gender: "female",
      lookingfor: "male",
      location: "Miami FA",
      image: 'https://randomuser.me/api/portraits/women/82.jpg',

  },
  {
      name: 'Bill Lees',
      age: 32,
      gender: "male",
      lookingfor: "female",
      location: "Lynn MA",
      image: 'https://randomuser.me/api/portraits/men/83.jpg',

  }
];

const profiles = profileIterator(data);
nextProfile();
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
const currentProfile = profiles.next().value;

if(currentProfile !== undefined)
  {

document.getElementById('profile-display').innerHTML = `
<ul class="list-group">
  <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
</ul>
`
document.getElementById('image-display').innerHTML = `
  <img src="${currentProfile.image}">
`
}else{
  window.location.reload();
}
}




function profileIterator(profiles)
{
  let nextIndex = 0;

  return{
    next: function() {
      return nextIndex < profiles.length ? {value: profiles[nextIndex++], done: false}:{done: true}
    }
  };
}
