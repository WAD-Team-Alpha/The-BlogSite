export const fetchData = async () => {
    try {
        const res = await fetch(
            "http://localhost:5000/api/v1/question/get_all_questions"
        );
        const data = await res.json();
        return data;
    } catch (error) {
        return "failed"
    }
};