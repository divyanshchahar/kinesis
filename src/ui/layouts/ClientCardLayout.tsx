import Image, {StaticImageData} from 'next/image';
import styles from "./ClientcardLayout.module.css"

export interface ClientCardLayoutPropTypes {
    clientImage: StaticImageData,
    clientName: string,
}

export default function ClientCardLayout({clientImage, clientName}: ClientCardLayoutPropTypes) {
    return (
        <div className={styles.container}>
            <Image src={clientImage} alt={clientName} height={40}/> <p className={"boldNormal"}>{`${clientName}`}</p>
        </div>
    )
}