import styles from "./TextAreaComponent.module.css"

export interface TextInputComponent {
    fieldName: string,
    placeHolder: string,
    mandatory: true | false,
    addedStyles?: string,
    colorScheme: string,
}

export default function TextInputComponent({
                                               fieldName,
                                               placeHolder,
                                               addedStyles,
                                               colorScheme,
                                               mandatory
                                           }: TextInputComponent) {

    return <>
        <label
            className={`${styles.label} regularNormal ${addedStyles} ${colorScheme} ${mandatory && styles.asterisk}`}>{fieldName}</label>
        <textarea placeholder={placeHolder} rows={3} className={`${styles.textarea} ${colorScheme} regularNormal`}/>
    </>
}