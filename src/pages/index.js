import { useAppContex } from "../store/store";
import { Link } from "react-router-dom";

export default function Index() {
    const store = useAppContex();


    return ( <
            div >
            <
            Link to = "/create" > Create < /Link> {
                store.items.map((item) =>
                    <
                    div > { item.title } < /div>)} <
                    /div>
                );
            }