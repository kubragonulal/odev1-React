import axios from "axios";

const getData = async (userId) => {
    try {
        // Kullanıcı verisini al
        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = userResponse.data;

        // Kullanıcı postlarını al
        const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = postsResponse.data;

        // Verileri birleştir
        return {
            ...user,
            posts,
        };
    } catch (error) {
        console.error("Veri alınırken bir hata oluştu:", error);
    }
};

export default getData;
