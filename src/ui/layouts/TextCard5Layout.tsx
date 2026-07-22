import styles from "./TextCard5Layout.module.css"

export interface TextCard5LayoutPropTypes {
    smallText: string,
    headingText: string,
    bodyText: string,
    colorScheme: string,
    addedStyle?: string,
    version: "saffron" | "blue" | "green"
}

export default function TextCard5Layout({
                                            smallText,
                                            headingText,
                                            bodyText,
                                            colorScheme,
                                            addedStyle,
                                            version
                                        }: TextCard5LayoutPropTypes) {
    let selectedColor = ""

    switch (version) {
        case "saffron":
            selectedColor = styles.saffron
            break
        case "blue":
            selectedColor = styles.blue
            break
        case "green":
            selectedColor = styles.green
            break
    }

    return (
        <div className={`${styles.container} ${colorScheme} ${addedStyle}`}>
            <p className={`boldNormal ${selectedColor}`}>{smallText}</p>
            <p className={`h3`}>{headingText}</p>
            <p className={`lightNormal`}>{bodyText}</p>
        </div>
    )
}