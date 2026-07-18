import styles from "./TextInputComponenet.module.css"

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
    // const finalFieldName = `${fieldName} ${mandatory ? "*" : ""}`;
    return <>
        <label
            className={`${styles.label} regularNormal ${addedStyles} ${colorScheme} ${mandatory && styles.asterisk}`}>{fieldName}</label>
        <input type="text" placeholder={placeHolder} className={`${styles.input} ${colorScheme} regularNormal`}/>
    </>
}