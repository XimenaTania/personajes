import { createContext, useContext, useEffect, useState } from "react"


const AppContex = createContext({
    items: [],
    createItem: (item) => {},
    getItem: (id) => {},
    updateItem: (item) => {},
});

export default function Store({ Children }) {
    const [items, setItems] = useState([]);

    function createItem(item) {
        const temp = [...items];
        temp.push(item);

        setItems(temp);

    }

    function getItem(id) {
        const item = items.find((item) => item.id === id);
        return item;

    }

    function updateItem(item) {
        const index = items.findIndex((i) => i.id === item.id);
        const temp = [...items];

        temp[index] = {...item };

    }

    return <AppContex.Provider value = {
            {
                items,
                createItem,
                getItem,
                updateItem,

            }
        } > { Children } <
        /AppContex.Provider>
}
export function useAppContex() {
    return useContext(AppContex);
}