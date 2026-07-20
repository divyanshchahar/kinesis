import styles from "./DetailsCard.module.css"

export interface DetailsCardLayoutPropTypes {
    headingText: string,
    bodyText: string,
    number: string,
    colorScheme: string,
    addedStyle?: string,
}

export default function DetailsCardLayout(
    {
        headingText,
        bodyText,
        number,
        colorScheme,
        addedStyle
    }
    :
    DetailsCardLayoutPropTypes) {

    return <div className={`${styles.container} ${colorScheme} ${addedStyle}`}>
        <div className={`${styles.number}`}>
            <p>{number}</p>
        </div>

        <p className={`h6`}>{headingText}</p>

        <p className={`lightNormal`}>{bodyText}</p>
    </div>

}

// TODO
// 1 . inspect heading color