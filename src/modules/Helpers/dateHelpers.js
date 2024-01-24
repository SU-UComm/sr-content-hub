export const reformatDate = (ts) => {
    // Validate date
    if (ts === undefined) {
        return '';
    }

    ts = parseInt(ts, 10);
    if (isNaN(ts) === true) {
        return '';
    }

    // Multiply date by 1000 to convert PHP vs JS date format (between seconds and miliseconds)
    ts = ts * 1000;

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const tsDate = new Date(ts);
    // Format: "April 30, 2023"
    const month = monthNames[tsDate.getMonth()];
    const day = tsDate.getDate();
    const year = tsDate.getFullYear();

    // If provided year is not accurate :: means invalid date or no date was provided :: return placeholder
    if (year === 1970) {
        return 'N/A';
    }

    return `${month} ${day}, ${year}`;
};
