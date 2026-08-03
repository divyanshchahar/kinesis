import styles from "./NumberedCardLayout.module.css"

export interface NumberedCardLayoutPropTypes {
    headingText: string,
    bodyText: string,
    number: string,
    colorScheme: string,
    addedStyle?: string,
}

export default function NumberedCardLayout(
    {
        headingText,
        bodyText,
        number,
        colorScheme,
        addedStyle
    }
    :
    NumberedCardLayoutPropTypes) {

    return <div className={`${styles.container} ${colorScheme} ${addedStyle}`}>
        <div className={`${styles.number}`}>
            <p>{number}</p>
        </div>

        <p className={`h6 ${styles.heading}`}>{headingText}</p>

        <p className={`lightNormal`}>{bodyText}</p>
    </div>

}

// TODO
// 1 . inspect heading color