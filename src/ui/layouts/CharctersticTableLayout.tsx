import CharactersticCardLayout from "@/ui/layouts/CharactersticCardLayout";
import styles from "./CharactersticTableLayout.module.css"

interface tableValues {
    characterstic: string,
    value: string
}

export interface CharctersticTableLayoutPropType {
    colorScheme: string,
    addedStyle?: string,
    values: tableValues[]
    version: "saffron" | "blue" | "green",
}

export default function CharctersticTableLayout({
                                                    colorScheme,
                                                    addedStyle,
                                                    values,
                                                    version
                                                }: CharctersticTableLayoutPropType) {
    return (
        <div className={`${colorScheme} ${addedStyle} ${styles.container}`}>
            {values.map((value, i) => (
                <CharactersticCardLayout key={i} characterstic={value.characterstic} value={value.value}
                                         colorScheme={colorScheme} version={version}/>
            ))}
        </div>
    )
}