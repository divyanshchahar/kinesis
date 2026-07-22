import UnorderedListComponent from "@/ui/componenets/UnorderedListComponent";
import styles from "./TextCard4Layout.module.css"

export interface DetailsCardLayoutPropTypes {
    colorScheme: string,
    version: "green" | "saffron" | "blue" | "accented",
    headingText: string,
    bulletPoints: string[],
}

export default function DetailsCardLayout({
                                              colorScheme,
                                              version,
                                              headingText,
                                              bulletPoints
                                          }: DetailsCardLayoutPropTypes) {

    let selectedColor = ""
    let selectedBackground = ""

    switch (version) {
        case "green":
            selectedColor = styles.green
            selectedBackground = styles.normalBackground
            break;

        case "blue":
            selectedColor = styles.blue
            selectedBackground = styles.normalBackground
            break;

        case "saffron":
            selectedColor = styles.saffron
            selectedBackground = styles.normalBackground
            break;

        case "accented":
            selectedColor = styles.green
            selectedBackground = styles.accentedBackground
            version = "green"

    }
    return <div className={`${styles.container} ${colorScheme} ${selectedBackground}`}>
        <p className={`h6 ${selectedColor}`}>{headingText}</p>

        <div>
            <UnorderedListComponent listType={"arrow"} listColor={version} listItems={bulletPoints}
                                    colorScheme={colorScheme} addedStyles={`${styles.leftPadding} ${styles.gap}`}/>
        </div>
    </div>
};