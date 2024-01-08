export const fetchData = async (text: string) => {
    // console.log(text)

    const url = 'https://rimedia-paraphraser.p.rapidapi.com/api_paraphrase.php';
    let result = {};

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'c12724cf15msh0dc570215d0874bp1b822ajsnbdd4e69832e3',
            'X-RapidAPI-Host': 'rimedia-paraphraser.p.rapidapi.com'
        },
        body: new URLSearchParams({
            text,
            lang: 'es',
            paraphrase_capital: 'true',
            protected: 'YOUR;something',
            mode: 'standard'
        })
    };

    try {
        const response = await fetch(url, options);
        result = await response.json();
    } catch (error) {
        return new Response('Error fetching data', {status: 400})
    }
    return result;
}
