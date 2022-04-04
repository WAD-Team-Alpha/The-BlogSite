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
                {props.questionsData.map((quest) => (
                    <QuestionCard //if the user is current user then render the posts of current user
                        key={quest._id}
                        id={quest._id}
                        votes={quest.up_votes.length}
                        answers={quest.answers.length}
                        title={quest.title}
                        description={quest.summary}
                        userId={quest.userId}
                        publishedDate={quest.published_date}
                        author={quest.author}
                    />
                ))}
            </div>
        </div>
    );
};

export default Questionscard;
