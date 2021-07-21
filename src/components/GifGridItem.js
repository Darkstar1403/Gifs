
export const GifGridItem = ({title, id, url}) =>{


    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={url} alt={title}></img>
            <p className='overflow-ellipsis'>{title}</p>
        </div>
    )
}