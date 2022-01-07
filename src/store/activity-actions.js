export const fetchActivity = async (recentActivity) => {
    const fetchPosts = async (postId) => {
        try {
            const response = await fetch(`https://fsd-project-e2e42-default-rtdb.firebaseio.com/posts/${postId}.json`);
            const data = await response.json();
            return data;
        } catch (error) {
            return error
        }
    };

    const fetchQuestions = async (threadId) => {
        try {
            const response = await fetch(`https://fsd-project-e2e42-default-rtdb.firebaseio.com/posts/${threadId}.json`);
            const data = await response.json();
            return data;
        } catch (error) {
            return error
        }
    };

    const postData = recentActivity.filter((obj) => obj.type === "post")
    const questionData = recentActivity.filter((obj) => obj.type === "question")

    const recents = []
    for (var post in postData) {
        const temp = await fetchPosts(postData[post].id)
        console.log("data 2 posts ", temp)
        recents.push({ type: 'post', data: temp })
    }
    for (var question in questionData) {
        const temp = await fetchQuestions(questionData[question].id)
        console.log("data 2 question ", temp)
        recents.push({ type: 'question', data: temp })
    }

    return recents
};