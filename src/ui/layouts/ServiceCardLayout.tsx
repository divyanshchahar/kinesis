import styles from "./ServiceCardLayout.module.css"
import Link from "next/link";
import UnorderedListComponent from "@/ui/componenets/UnorderedListComponent";

export interface ServiceCardLayoutPropTypes {
    capsuleText: string;
    headingText: string;
    bodyText: string;
    linkText: string;
    bulletPoints: string[],
    colorScheme: string,
    addedStyle?: string,
    version: "saffron" | "blue" | "green",
    navigationUrl: string,
}

export default function ServiceCardLayout({
                                              capsuleText,
                                              headingText,
                                              bodyText,
                                              linkText,
                                              bulletPoints,
                                              colorScheme,
                                              addedStyle,
                                              version,
                                              navigationUrl
                                          }: ServiceCardLayoutPropTypes
) {
    let selctedCapsuleColor = ""
    let linkColor = ""

    switch (version) {
        case "saffron":
            selctedCapsuleColor = styles.saffronCapsule
            linkColor = styles.saffronLink
            break;
        case "green":
            selctedCapsuleColor = styles.greenCapsule
            linkColor = styles.greenLink
            break;
        case "blue":
            selctedCapsuleColor = styles.blueCapsule
            linkColor = styles.blueLink;
            break;

    }

    return (
        <div className={`${colorScheme} ${styles.container} ${addedStyle}`}>
            <div className={styles.top}>
                <div className={`lightSmall ${styles.capsule} ${selctedCapsuleColor}`}>{capsuleText}</div>

                <p className={`boldNormal ${styles.heading}`}>{headingText}</p>

                <p className={`lightNormal`}>{bodyText}</p>

                <Link href={navigationUrl} className={`boldNormal ${styles.link} ${linkColor}`}>{linkText}</Link>
            </div>

            <div>
                <UnorderedListComponent listType={"check mark"} listColor={version} listItems={bulletPoints}
                                        colorScheme={colorScheme}/>
            </div>
        </div>
    )
}