import styles from "./Textcard3Layout.module.css"

export interface TextCard3LayoutPropTypes {
    smallText: string,
    headingText: string,
    bodyText: string,
    colorScheme: string,
    addedStyle?: string,
}

export default function TextCard3Layout({
                                            smallText,
                                            headingText,
                                            bodyText,
                                            colorScheme,
                                            addedStyle
                                        }: TextCard3LayoutPropTypes) {
    return (
        <div className={`${styles.container} ${colorScheme} ${addedStyle}`}>
            <p className={"boldSmall"}>{smallText}</p>
            <p className={`h6 ${styles.headingf}`}>{headingText}</p>
            <p className={"regularNormal"}>{bodyText}</p>
        </div>
    )
}