import styles from "./ProductCardLayout.module.css"
import Link from "next/link";
import UnorderedListComponent from "@/ui/componenets/UnorderedListComponent";

export interface ServiceCardLayoutPropTypes {
    // capsuleText: string;
    headingText: string;
    bodyText: string;
    linkText: string;
    bulletPoints: string[],
    colorScheme: string,
    addedStyle?: string,
    version: "saffron" | "blue" | "green"
}

export default function ServiceCardLayout({
                                              // capsuleText,
                                              headingText,
                                              bodyText,
                                              linkText,
                                              bulletPoints,
                                              colorScheme,
                                              addedStyle,
                                              version
                                          }: ServiceCardLayoutPropTypes
) {
    let selctedColor = ""
    let lineColor = ""

    switch (version) {
        case "saffron":
            selctedColor = styles.saffronLink
            lineColor = styles.saffronLine
            break;
        case "green":
            selctedColor = styles.greenLink
            lineColor = styles.greenLine
            break;
        case "blue":
            selctedColor = styles.blueLink
            lineColor = styles.blueLine
            break;

    }

    return (
        <div className={`${colorScheme} ${styles.container} ${addedStyle}`}>

            <hr className={lineColor}/>


            <p className={`h6 ${styles.heading}`}>{headingText}</p>

            <p className={`lightNormal`}>{bodyText}</p>


            <div>
                <UnorderedListComponent listType={"check mark"} listColor={version} listItems={bulletPoints}
                                        colorScheme={colorScheme}/>
            </div>

            <Link href="" className={`boldNormal ${styles.link} ${selctedColor}`}>{linkText}</Link>

        </div>
    )
}