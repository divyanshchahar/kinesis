import styles from "@/ui/layouts/AccentedHeading1Layout.module.css";

export interface AccentedHeading1LayoutPropTypes {
    colorScheme: string,
    headingText: string
    addedStyle?: string,
    version: "saffron" | "blue" | "green"
}

export default function AccentedHeading1Layout({
                                                   colorScheme,
                                                   headingText,
                                                   version,
                                                   addedStyle
                                               }: AccentedHeading1LayoutPropTypes) {

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

    return <div className={`${colorScheme} ${styles.container} ${addedStyle}`}>
        <div className={`${styles.container}`}>
            <div className={`${styles.squareContainer}`}>
                <div className={`${selectedColor} ${styles.sqaure}`}></div>
            </div>
            <p className={`h2 ${styles.heading}`}>{headingText}</p>
        </div>
    </div>
}