import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['Demons Souls'])
    // const handleAdd = () =>{
    //     setCategories(cats => [...cats, 'Demonslayer'])
    // }
    return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory setCategories={setCategories}/>
        <hr />
        <ol>
            { categories.map(category =>
                 <GifGrid category={category} key={category}/>
            )}
        </ol>
    </>
    )
}