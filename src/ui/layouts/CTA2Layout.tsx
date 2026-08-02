"use client"

import styles from "./CTA2Layout.module.css"
import CTAButton from "@/ui/componenets/CTAButton";
import {useRouter} from "next/navigation";
import internalkLinks from "./../../const/internalRoutes.json"


export interface CTALayoutProptype {
    colorScheme: string,
    headingText: string,
    bodyText: string,
    addedStyle?: string,
}

export default function CTA2Layout({colorScheme, addedStyle, bodyText, headingText}: CTALayoutProptype) {

    const router = useRouter();

    return (
        <div className={`paddedContainer maxWidthContainer ${colorScheme} ${styles.container} ${addedStyle}`}>
            <div className={`${styles.max60chContainer}`}>
                <p className={`h1 ${styles.heading}`}>{headingText}</p>

                <p className={`lightNormal`}>{bodyText}</p>

                <CTAButton version={"large"} ctaText={"Contact Our Team"} addedStyle={styles.fitted}
                           clickHandler={() => {
                               router.push(internalkLinks.contactus)
                           }}/>
            </div>
        </div>
    )
}