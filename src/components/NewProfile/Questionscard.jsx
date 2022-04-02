import QuestionCard from "../home/cards/QuestionCard";

const Questionscard = (props) => {
    return (
        <div>
            <div
                className="container-fluid"
                style={{
                    height: "535px",
                    overflowY: "scroll",
                    borderLeft: "1px solid #b1b1b1",
                    borderRight: "1px solid #b1b1b1",
                    borderBottom: "1px solid #b1b1b1",
                    backgroundColor: "#edf5e1",
                }}
            >
                          <QuestionCard //if the user is current user then render the posts of current user
                              key={1}
                              id={1}
                              votes={5}
                              answers={["this is answers"]}
                              question={"This is question"}
                              details={"This is detidhfc"}
                              userId={"1"}
                              publishedDate={"String"}
                              author={"authon"}
                          />
            </div>
        </div>
    );
};

export default Questionscard;
