import styles from "./TextCard1Layout.module.css"

export interface TextCard1LayoutPropTypes {
    lineColor: "saffron" | "blue" | "green",
    backgroundColor: "background" | "foreground",
    headingText: string,
    bodyText: string,
    colorScheme: string,
    addedStyles?: string,
}


export default function TextCard1Layout({
                                            lineColor,
                                            backgroundColor,
                                            headingText,
                                            bodyText,
                                            colorScheme,
                                            addedStyles
                                        }: TextCard1LayoutPropTypes) {
    let selectedLineColor = ""
    let seletcedBackgroundColor = ""

    switch (lineColor) {
        case "saffron":
            selectedLineColor = styles.saffron
            break;
        case "blue":
            selectedLineColor = styles.blue
            break;
        case "green":
            selectedLineColor = styles.green
            break;
    }

    switch (backgroundColor) {
        case "background":
            seletcedBackgroundColor = styles.background
            break;
        case "foreground":
            seletcedBackgroundColor = styles.foreground
            break;
    }

    return (
        <div
            className={`${styles.container} ${selectedLineColor} ${seletcedBackgroundColor} ${colorScheme} ${addedStyles}`}>
            <hr/>
            <p className={`h6 ${styles.heading}`}>{headingText}</p>
            <p className={"lightNormal"}>{bodyText}</p>
        </div>
    )
}