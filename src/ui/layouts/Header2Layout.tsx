import styles from "./Header2Layout.module.css"

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

    switch (version) {
        case "saffron":
            selctedColorBox = styles.saffronBox
            selectedColor = styles.saffron
            break;
        case "green":
            selctedColorBox = styles.greenBox
            selectedColor = styles.green
            break;
        case "blue":
            selctedColorBox = styles.blueBox
            selectedColor = styles.blue
            break;


    }
    return (
        <div className={`${colorScheme} paddedContainer`}>
            <div className={`${styles.container} maxWidthContainer`}>
                <div className={`${styles.top} lightNormal`}>
                    All products
                    <div className={`${styles.capsule} ${selectedColor} regularNormal`}>
                        {capsulText}
                    </div>
                </div>
                <p className={`h1 ${styles.heading}`}>{headingText}</p>
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