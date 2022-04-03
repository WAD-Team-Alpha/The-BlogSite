export const fetchData = async (page, limit) => {
    try {
        const res = await fetch(
            `http://localhost:5000/api/v1/post/get_all_posts?page=${page}&limit=${limit}`
        );
        const data = await res.json();
        return data;
    } catch (error) {
        return "failed"
    }
};