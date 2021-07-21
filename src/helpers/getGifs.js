export const getGif = async(category) =>{
    try{
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=LFI0GdzX3vuMZK2hQAweD3mFAjiYfZGo`
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(({title, id, images}) => ({
            id: id,
            title: title,
            url: images?.downsized_medium.url
        }));
        return gifs;
    }
    catch(error){
        console.log(error);
    }
}