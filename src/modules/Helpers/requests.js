export const fetchFBData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const res = await response.json();
        return res;
    } catch (error) {
        console.error('Error fetching data:', error);
        return error;
    }
};
