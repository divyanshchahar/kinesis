import styles from "./Textcard3Layout.module.css"

export interface TextCard3LayoutPropTypes {
    smallText: string,
    headingText: string,
    bodyText: string,
    colorScheme: string,
}

export default function TextCard3Layout({smallText, headingText, bodyText, colorScheme}: TextCard3LayoutPropTypes) {
    return (
        <div className={`${styles.container} ${colorScheme}`}>
            <p className={"boldSmall"}>{smallText}</p>
            <p className={"h6"}>{headingText}</p>
            <p className={"lightNormal"}>{bodyText}</p>
        </div>
    )
}