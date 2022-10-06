import { useState } from "react";
import { useAppContex } from "../store/store";
import { Link } from "react-router-dom";

export default function Create() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [cover, setCover] = useState("");
    const [intro, setIntro] = useState("");
    const [completed, setCompleted] = useState(false);
    const [review, setReview] = useState("");

    const store = useAppContex();

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        switch (name) {
            case 'title':
                setTitle(value);
                break;

            case 'author':
                setAuthor(value);
                break;

            case 'cover':
                setCover(value);
                break;
            case 'intro':
                setIntro(value);
                break;
            case 'completed':
                setCompleted(e.target.checked);
                break;
            case 'review':
                setReview(value);
                break;

            default:

        }

    }

    function handleOnChangeFile(e) {
        const element = e.target;
        const file = element.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = function() {
            setCover(reader.result.toString())
        }



    }

    function handleSubmit(e) {
        e.preventDefault();


        const newBook = {
            id: crypto.randomUUID(),
            title,
            author,
            cover,
            intro,
            completed,
            review,

        };
        //TODO: manda  a  crear  
        store.createItem(newBook);

    }


    return ( <
        div >
        <
        Link to = "/" > Home < /Link> <
        form onSubmit = { handleSubmit } >
        <
        div >
        <
        div > Nombre y apellido < /div> <
        input type = "text"
        name = "title"
        onChange = { handleChange }
        value = { title }
        /> <
        /div>

        <
        div >
        <
        div > Lenguaje de programacion < /div> <
        input type = "text"
        name = "author"
        onChange = { handleChange }
        value = { author }
        /> <
        /div> <
        div >
        <
        div > Cover < /div> <
        input type = "file"
        name = "cover"
        onChange = { handleOnChangeFile }
        /> <
        div > {!!cover ? < img src = { cover }
            width = "200"
            alt = "preview" / > : "" } < /div> <
        /div> <
        div >
        <
        div > Bibiografia < /div> <
        input type = "text"
        name = "intro"
        onChange = { handleChange }
        value = { intro }
        /> <
        /div> <
        div >
        <
        div > Completed < /div> <
        input type = "checkbox"
        name = "completed"
        onChange = { handleChange }
        value = { completed }
        /> <
        /div> <
        div >
        <
        div > Review < /div> <
        input type = "text"
        name = "review"
        onChange = { handleChange }
        value = { review }
        /> <
        /div> <
        input type = "submit"
        value = "Registro agregado " / >
        <
        /form> <
        /div>
    );
}