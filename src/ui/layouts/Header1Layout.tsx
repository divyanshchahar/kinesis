import styles from "./Header1Layout.module.css"

export interface Header1LayoutPropTypes {
    colorScheme: string,
    smallText: string,
    headingText: string,
    bodyText: string,
    addedStyle?: string,
}

export default function Header1Layout({
                                          colorScheme,
                                          smallText,
                                          headingText,
                                          bodyText,
                                          addedStyle
                                      }: Header1LayoutPropTypes) {
    return (
        <div className={`${styles.container} ${colorScheme} ${addedStyle} paddedContainer`}>
            <p className={`boldNormal ${styles.saffron}`}>{smallText}</p>
            <p className={`h1 ${styles.heading}`}>{headingText}</p>
            <p className={`regularNormal`}>{bodyText}</p>
        </div>
    )
}