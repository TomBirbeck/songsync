const getSong = async () => {
    const token: string = (import.meta.env.VITE_TOKEN as string);
    const user_id: string = (import.meta.env.USER_ID as string);
    const res = await fetch(`https://www.stands4.com/services/v2/lyrics.php?uid=${user_id}&tokenid=${token}&term=forever%20young&artist=Alphaville&format=json`);
    const data = await res.json();
    console.log(data)
    return data
}

export default getSong