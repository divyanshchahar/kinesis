import styles from "./CharactersticCardLayout.module.css"

export interface CharactersticCardLayoutPropTypes {
    characterstic: string,
    value: string,
    colorScheme: string,
    addedStyle?: string,
    version: "saffron" | "blue" | "green",
}

export default function CharactersticCardLayout({
                                                    characterstic,
                                                    value,
                                                    version,
                                                    colorScheme,
                                                    addedStyle
                                                }: CharactersticCardLayoutPropTypes) {

    let selectedColor = ""

    switch (version) {
        case "saffron":
            selectedColor = styles.saffron
            break;
        case "blue":
            selectedColor = styles.blue
            break;
        case "green":
            selectedColor = styles.green
            break;
    }

    return (
        <div className={`${styles.container} ${colorScheme} ${addedStyle}`}>
            <p className={`regularNormal`}>{characterstic}</p>
            <p className={`regularNormal ${selectedColor}`}>{value}</p>
        </div>
    )
}