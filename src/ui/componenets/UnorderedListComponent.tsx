import styles from "./UnorderedListComponent.module.css"

export interface UnorderedListComponentPropTypes {
    listType: "check mark" | "arrow"
    listColor: "saffron" | "blue" | "green"
    listItems: string[]
    colorScheme: string;
    addedStyles?: string;
}

export default function UnorderedListComponent({
                                                   listType,
                                                   listColor,
                                                   listItems,
                                                   colorScheme,
                                                   addedStyles
                                               }: UnorderedListComponentPropTypes) {
    let selectedListType = ""
    let selectedListColor = ""

    switch (listType) {
        case "check mark":
            selectedListType = styles.checkmark
            break;
        case "arrow":
            selectedListType = styles.arrow
            break;
    }

    switch (listColor) {
        case "saffron":
            selectedListColor = styles.saffron
            break;
        case "blue":
            selectedListColor = styles.blue
            break;
        case "green":
            selectedListColor = styles.green
            break;
    }

    return (
        <ul className={`${styles.container} ${selectedListColor} ${colorScheme} ${selectedListType} regularNormal`}>
            {
                listItems.map((listItem, i) => {
                    return <li key={i}>{listItem}</li>
                })
            }
        </ul>
    )
}