import styles from "./CTAButton.module.css"

export interface CTAButtonPropTypes {
    version: "large" | "inline",
    ctaText: string,
    addedStyle?: string
    clickHandler: () => void
}


export default function CTAButton({version, ctaText, addedStyle, clickHandler}: CTAButtonPropTypes) {
    let paddedClassName = "";

    switch (version) {
        case "large":
            paddedClassName = styles.largePadding;
            break;
        case "inline":
            paddedClassName = styles.smallPAdding
            break;
    }

    return (
        <button className={`${addedStyle} boldNormal ${styles.container} ${paddedClassName} colorScheme1`}
                onClick={() => {
                    clickHandler()
                }}>
            {ctaText}
        </button>
    )
}