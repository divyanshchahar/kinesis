import Image, {StaticImageData} from "next/image";
import styles from "./TeamMemberLayout.module.css"
import UnorderedListComponent from "@/ui/componenets/UnorderedListComponent";


export interface TeamMemberLayoutPropTypes {
    teamMemberName: string;
    teamMemberDesignation: string;
    teamMemberImage: StaticImageData
    colorScheme: string,
    addedStyle?: string,
    bulletPoints: string[],
    version: "saffron" | "blue" | "green"
}

export default function TeamMemberLayout({
                                             teamMemberDesignation,
                                             teamMemberName,
                                             teamMemberImage,
                                             addedStyle,
                                             colorScheme,
                                             bulletPoints,
                                             version
                                         }: TeamMemberLayoutPropTypes) {
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
        <div className={`${styles.container} ${addedStyle} ${colorScheme}`}>
            <Image src={teamMemberImage} width={250} height={250} alt={teamMemberName} className={styles.image}/>

            <p className={`h3 ${styles.heading}`}>{teamMemberName}</p>

            <p className={`boldNormal ${selectedColor}`}>{teamMemberDesignation}</p>

            <div className={styles.bottom}>
                <UnorderedListComponent listType={"arrow"} listColor={version} listItems={bulletPoints}
                                        colorScheme={colorScheme}/>
            </div>
        </div>
    )
}