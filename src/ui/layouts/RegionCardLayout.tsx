import styles from "./RegionCardLayout.module.css"

export interface RegionCardLayoutPropsInterface {
    colorScheme: string,
    addedStyle?: string,
    region: string,
    countries: string[],
    version: "saffron" | "green" | "blue"
}

export default function RegionCardLayout({
                                             colorScheme,
                                             region,
                                             addedStyle,
                                             countries,
                                             version
                                         }: RegionCardLayoutPropsInterface) {

    let selectedColor = "";

    switch (version) {
        case "saffron":
            selectedColor = styles.saffron;
            break;
        case "green":
            selectedColor = styles.green;
            break;
        case "blue":
            selectedColor = styles.blue;
            break;
    }


    return (
        <div className={`${colorScheme} ${addedStyle} ${styles.container}`}>
            <hr className={`${styles.line} ${selectedColor}`}/>
            <p className={`h6 ${styles.heading}`}>{region}</p>
            <div className={`${styles.countries}`}>
                {countries.map((country, i) => {
                    return (
                        <div key={i} className={`${styles.capsule} regularNormal ${colorScheme}`}>
                            {country}
                        </div>
                    )
                })}
            </div>
        </div>
    )

}