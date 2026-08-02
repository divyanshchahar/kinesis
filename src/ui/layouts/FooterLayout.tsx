"use client"

import styles from "./FooterLayout.module.css"
import Link from "next/link";
import CTAButton from "@/ui/componenets/CTAButton";
import companyLogo from "./../../../public/logo/logo.svg"
import Image from "next/image"
import {useRouter} from "next/navigation";
import internalLinks from "./../../const/internalRoutes.json"


export default function FooterLayout() {
    const router = useRouter();

    return (
        <div className={`paddedContainer ${styles.container} colorScheme3`}>

            <div className={`${styles.top} maxWidthContainer`}>
                <div className={`${styles.logoContainer}`}>
                    <Image src={companyLogo} alt={"kinesis it solution logo"} height={118} width={118}/>
                    <p className={`lightNormal`}>Consolidating Indian industry in a spirit of industrial patriotism —
                        driving growth, self-reliance and national pride.</p>
                </div>

                <div className={`${styles.links}`}>
                    <p className={`boldNormal ${styles.secondryText}`}>EXPLORE</p>
                    <Link href={internalLinks.aboutus.root} className={"regularNormal"}>About Us</Link>
                    <Link href={internalLinks.products.root} className={"regularNormal"}>Products</Link>
                    <Link href={internalLinks.services.root} className={"regularNormal"}>Services</Link>
                    <Link href={internalLinks.contactus} className={"regularNormal"}>Contact Us</Link>
                </div>

                <div className={`${styles.links}`}>
                    <p className={`boldNormal ${styles.secondryText}`}>CONTACT</p>
                    <p className={"regularNormal"}>+91-9971870714</p>
                    <p className={"regularNormal"}>info@kinesistecch.in</p>
                    <CTAButton version={"inline"} ctaText={"Start a Conversation"} addedStyle={styles.fittedWidth}
                               clickHandler={() => router.push(internalLinks.contactus)}/>
                </div>
            </div>

            <hr/>

            <div className={`${styles.bottom} maxWidthContainer`}>
                <p className={`${styles.secondryText} lightNormal`}>© 2026 Kinesis IT Solution. Led by Mayank
                    Sharma.</p>
                <p className={`boldNormal ${styles.saffron}`}>जय हिन्द · JAI HIND</p>
            </div>
        </div>
    )
}