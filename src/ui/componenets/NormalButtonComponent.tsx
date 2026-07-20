import styles from "./NormalButtonComponent.module.css"

export interface NormalButtonPropTypes {
    buttonText: string,
    addedStyle?: string,
    colorScheme: string,
}


export default function NormalButtonComponent({buttonText, addedStyle, colorScheme}: NormalButtonPropTypes) {

    return (
        <button className={`${addedStyle} boldNormal ${styles.container} ${colorScheme}`}>
            {buttonText}
        </button>
    )
}