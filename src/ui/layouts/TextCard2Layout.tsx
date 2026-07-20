import styles from "@/ui/layouts/TextCard1Layout.module.css";

export interface TextCard2LayoutPropTypes {
    headingText: string;
    bodyText: string;
    colorScheme: string;
    addedStyles?: string;
    lineColor: "saffron" | "blue" | "green";
}


export default function TextCard2Layout({
                                            headingText,
                                            bodyText,
                                            colorScheme,
                                            addedStyles,
                                            lineColor
                                        }: TextCard2LayoutPropTypes) {

    let selectedLineColor = "";

    switch (lineColor) {
        case "saffron":
            selectedLineColor = styles.saffron;
            break;
        case "blue":
            selectedLineColor = styles.blue;
            break;
        case "green":
            selectedLineColor = styles.green;
            break;
    }

    return <div className={`${styles.container} ${selectedLineColor} ${colorScheme}`}>
        <hr/>
        <p className={"h2"}>{headingText}</p>
        <p className={"lightNormal"}>{bodyText}</p>
    </div>
}