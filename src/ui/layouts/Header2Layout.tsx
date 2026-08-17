import styles from "./Header2Layout.module.css"
import Link from "next/link";
import internalLinks from "./../../const/internalRoutes.json"

export interface Header2LayoutPropTypes {
    colorScheme: string,
    capsulText: string,
    headingText: string,
    bodyText: string,
    hasBox: true | false
    boxText?: string,
    version: "saffron" | "green" | "blue"
}

export default function Header2Layout({
                                          colorScheme,
                                          capsulText,
                                          headingText,
                                          bodyText,
                                          hasBox,
                                          boxText,
                                          version
                                      }:
                                      Header2LayoutPropTypes
) {

    let selectedColor = ""
    let selctedColorBox = ""
    let selectedBackground = ""

    switch (version) {
        case "saffron":
            selctedColorBox = styles.saffronBox
            selectedColor = styles.saffron
            selectedBackground = styles.saffronBackground
            break;
        case "green":
            selctedColorBox = styles.greenBox
            selectedColor = styles.green
            selectedBackground = styles.greenBackground
            break;
        case "blue":
            selctedColorBox = styles.blueBox
            selectedColor = styles.blue
            selectedBackground = styles.blueBackground
            break;


    }
    return (
        <div className={`${styles.container} ${colorScheme} ${selectedBackground} paddedContainer`}>
            <div className={`maxWidthContainer ${styles.flexBox}`}>
                <div className={`${styles.top} lightNormal`}>
                    <Link href={internalLinks.products.root}>All products</Link>
                    <div className={`${styles.capsule} ${selectedColor} regularNormal`}>
                        {capsulText}
                    </div>
                </div>

                <p className={`h2 ${styles.heading}`}>{headingText}</p>

                <p className={`lightNormal`}>{bodyText}</p>

                {
                    hasBox && <div className={`${styles.box} ${colorScheme} ${selctedColorBox} lightNormal`}>
                        {
                            boxText
                        }
                    </div>
                }
            </div>
        </div>
    )
}