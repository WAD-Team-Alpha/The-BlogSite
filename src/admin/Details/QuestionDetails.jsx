import { useNavigate} from "react-router-dom"


const QuestionDetails=()=>{

    const navigate = useNavigate();
    return (
        <div style={{backgroundColor:"#8ee4af", marginTop:"1em", height:"500px"}}>
          <div style = {{paddingLeft:"35em", paddingTop:"3em", paddingBottom:"2em", fontSize:"larger"}}><b>Question Details</b></div>
       
        <div class="container">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Summary</th>
              <th scope="col">Image</th>
              <th scope="col">Asked by</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Question Title</td>
              <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</td>
              <td>question.url.com </td>
              <td>Author Name</td>
            </tr>
           
          </tbody>
        </table>
        <div>
          <button class="btn btn-danger" style={{marginRight:"5em"}}>Delete Question</button>
          <button class="btn btn-primary" onClick={()=>navigate("/admin/users/id")}>View Profile</button>

        </div>
        </div>
        </div>
      );
}

export default QuestionDetails;