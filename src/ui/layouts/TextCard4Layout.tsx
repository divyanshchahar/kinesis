import UnorderedListComponent from "@/ui/componenets/UnorderedListComponent";
import styles from "./TextCard4Layout.module.css"

export interface TextCard4LayoutPropTypes {
    colorScheme: string,
    version: "green" | "saffron" | "blue",
    headingText: string,
    bulletPoints: string[],
}

export default function TextCard4Layout({colorScheme, version, headingText, bulletPoints}: TextCard4LayoutPropTypes) {

    let selectedColor = ""

    switch (version) {
        case "green":
            selectedColor = styles.green
            break;
        case "blue":
            selectedColor = styles.blue
            break;
        case "saffron":
            selectedColor = styles.saffron
            break;

    }
    return <div className={`${styles.container} ${colorScheme}`}>
        <p className={`h6 ${selectedColor}`}>{headingText}</p>

        <div>
            <UnorderedListComponent listType={"check mark"} listColor={version} listItems={bulletPoints}
                                    colorScheme={colorScheme} addedStyles={`${styles.leftPadding} ${styles.gap}`}/>
        </div>
    </div>
};