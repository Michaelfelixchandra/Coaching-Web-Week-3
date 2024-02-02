import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [id, setIdmeal] = useState(0);
    const [meals, setMeals] = useState('');
    const [category, setCategory] = useState('');
    const [area, setArea] = useState('');
    const [instructions, setInstructions] = useState('');
    const [image, setImage] = useState('');
    const [tag, setTag] = useState('');
    const [youtube, setYoutube] = useState('');

    const [ingridients1, setIngridients1] = useState('');
    const [ingridients2, setIngridients2] = useState('');
    const [ingridients3, setIngridients3] = useState('');
    const [ingridients4, setIngridients4] = useState('');
    const [ingridients5, setIngridients5] = useState('');
    const [ingridients6, setIngridients6] = useState('');
    const [ingridients7, setIngridients7] = useState('');
    const [ingridients8, setIngridients8] = useState('');

    const [measure1, setMeasure1] = useState(0);
    const [measure2, setMeasure2] = useState(0);
    const [measure3, setMeasure3] = useState(0);
    const [measure4, setMeasure4] = useState(0);
    const [measure5, setMeasure5] = useState(0);
    const [measure6, setMeasure6] = useState(0);
    const [measure7, setMeasure7] = useState(0);
    const [measure8, setMeasure8] = useState(0);

    const fetchData = async () => {
        const res = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiat");
        setIdmeal(res.data.meals[0].idMeal);
        setMeals(res.data.meals[0].strMeal);
        setCategory(res.data.meals[0].strCategory);
        setArea(res.data.meals[0].strArea);
        setInstructions(res.data.meals[0].strInstructions);
        setImage(res.data.meals[0].strMealThumb);
        setTag(res.data.meals[0].strTags);
        setYoutube(res.data.meals[0].strYoutube);

        setIngridients1(res.data.meals[0].strIngredient1);
        setIngridients2(res.data.meals[0].strIngredient2);
        setIngridients3(res.data.meals[0].strIngredient3);
        setIngridients4(res.data.meals[0].strIngredient4);
        setIngridients5(res.data.meals[0].strIngredient5);
        setIngridients6(res.data.meals[0].strIngredient6);
        setIngridients7(res.data.meals[0].strIngredient7);
        setIngridients8(res.data.meals[0].strIngredient8);

        setMeasure1(res.data.meals[0].strMeasure1);
        setMeasure2(res.data.meals[0].strMeasure2);
        setMeasure3(res.data.meals[0].strMeasure3);
        setMeasure4(res.data.meals[0].strMeasure4);
        setMeasure5(res.data.meals[0].strMeasure5);
        setMeasure6(res.data.meals[0].strMeasure6);
        setMeasure7(res.data.meals[0].strMeasure7);
        setMeasure8(res.data.meals[0].strMeasure8);
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h2>Italian Recipe</h2>
            <img style = {{width: 200}} src={image} />
            <p>ID Recipe: {id}</p>
            <p>Menu: {meals}</p>
            <p>Category: {category}</p>
            <p>Country: {area}</p>
            <h3>Ingridients</h3>
            <table>
                <tr>
                    <td>Ingridients</td>
                    <td>Measure</td>
                </tr>
                <tr>
                    <td>{ingridients1}</td>
                    <td>{measure1}</td>
                </tr>
                <tr>
                    <td>{ingridients2}</td>
                    <td>{measure2}</td>
                </tr>
                <tr>
                    <td>{ingridients3}</td>
                    <td>{measure3}</td>
                </tr>
                <tr>
                    <td>{ingridients4}</td>
                    <td>{measure4}</td>
                </tr>
                <tr>
                    <td>{ingridients5}</td>
                    <td>{measure5}</td>
                </tr>
                <tr>
                    <td>{ingridients6}</td>
                    <td>{measure6}</td>
                </tr>
                <tr>
                    <td>{ingridients7}</td>
                    <td>{measure7}</td>
                </tr>
                <tr>
                    <td>{ingridients8}</td>
                    <td>{measure8}</td>
                </tr>
            </table>
            <p>Instruction: {instructions}</p>
            <p>Type: {tag}</p>
            <p>Link Youtube: <a href={youtube}>https://www.youtube.com/watch?v=1IszT_guI08</a></p>
            <p>Link API Public: <a href="https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiat">https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiat</a></p>
        </div>
    )
}
export default App