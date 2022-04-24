const UserDetails = () => {
  return (
    <div style={{backgroundColor:"#8ee4af", marginTop:"1em", height:"500px"}}>
      <div style = {{paddingLeft:"35em", paddingTop:"3em", paddingBottom:"2em", fontSize:"larger"}}><b>User Details</b></div>
   
    <div class="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Genres</th>
          <th scope="col">Bio</th>
          <th scope="col">Followers</th>
          <th scope="col">Following</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Useremail@example.com</td>
          <td>Genre1, Genre2, Genre3, Genre4</td>
          <td>Bio: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum </td>
          <td>0</td>
          <td>0</td>
          

          

        </tr>
       
      </tbody>
    </table>
    <div>
      <button class="btn btn-primary">Delete Profile</button>
    </div>
    </div>
    </div>
  );
};

export default UserDetails;
