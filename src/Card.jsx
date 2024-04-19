async function Card() {
  const url = "https://brawl-stars-profile-backend.vercel.app/userinfo/%23PLCPRVY80";
  fetch(url).then(response => response.json()).then(data => {
    return (
      <div>
        <p>{data}</p>
      </div>
    )
  }).catch(error => {
    return (
      <div>
        <p>{error}</p>
      </div>
    )
  })
  
}

export default Card;