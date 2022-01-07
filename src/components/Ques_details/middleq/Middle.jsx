import { useSelector } from "react-redux"

const Middle=()=>{
   const questiondata = useSelector((state)=> state.question)
   console.log(questiondata)
   return <div>
        <div>
            <span>{questiondata.description} </span>
        </div>
        <div style={{ paddingRight: "1em", paddingTop:"1em" }}>
          <img src={questiondata.imageUrl} alt="prathyush" width="820px" height="248px" />
        </div>
    </div>

}

export default Middle