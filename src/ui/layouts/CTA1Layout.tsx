"use client"

import styles from "./CTA1Layout.module.css"
import CTAButton from "@/ui/componenets/CTAButton";
import {useRouter} from "next/navigation";
import internalLinks from "./../../const/internalRoutes.json"

export interface CTALayoutProptype {
    colorScheme: string,
    headingText: string,
    bodyText: string,
    addedStyle?: string,
}

export default function CTA1Layout({colorScheme, addedStyle, bodyText, headingText}: CTALayoutProptype) {

    const router = useRouter();

    return (
        <div className={`paddedContainer ${colorScheme} ${styles.container} ${addedStyle}`}>
            <div className={`${styles.flex}`}>
                <p className={`h2 ${styles.heading}`}>{headingText}</p>
                <p className={`lightNormal`}>{bodyText}</p>
                <CTAButton version={"large"} ctaText={"Get In Touch"} addedStyle={styles.fitted} clickHandler={() => {
                    router.push(internalLinks.contactus)
                }}/>
            </div>
        </div>
    )
}