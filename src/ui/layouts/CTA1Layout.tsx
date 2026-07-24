import styles from "./CTA1Layout.module.css"
import CTAButton from "@/ui/componenets/CTAButton";

export interface CTALayoutProptype {
    colorScheme: string,
    headingText: string,
    bodyText: string,
    addedStyle?: string,
}

export default function CTA1Layout({colorScheme, addedStyle, bodyText, headingText}: CTALayoutProptype) {
    return (
        <div className={`paddedContainer ${colorScheme} ${styles.container} ${addedStyle}`}>
            <div className={`maxWidthContainer ${styles.flex}`}>
                <p className={`h2 ${styles.heading}`}>{headingText}</p>
                <p className={`lightNormal`}>{bodyText}</p>
                <CTAButton version={"large"} ctaText={"Get In Touch"} addedStyle={styles.fitted}/>
            </div>
        </div>
    )
}