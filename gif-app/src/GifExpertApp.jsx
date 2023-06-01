import { useState } from "react"
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Demon Slayer'])

    const addCategories = (newCategories) => {
        if (categories.includes(newCategories)) return;
        setCategories([newCategories, ...categories])
    }
    return (
        <>
            <h1>Gif-App</h1>
            <AddCategory addCategories={addCategories} />
            {
                categories.map((categories) => (
                    <GifGrid key={categories} categories={categories} />
                ))
            }
        </>
    )
}
