export interface HamburgerIconComponentPropTypes {
    addedStyles?: string
}

export default function HamburgerIconComponent({
                                                   addedStyles
                                               }: HamburgerIconComponentPropTypes) {
    return (
        <svg width="100%" height="100%" viewBox="0 0 20 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
             className={addedStyles}>
            <path
                d="M0 1.66667C0 0.746192 0.814027 0 1.81818 0H18.1818C19.186 0 20 0.746192 20 1.66667C20 2.58714 19.186 3.33333 18.1818 3.33333H1.81818C0.814027 3.33333 0 2.58714 0 1.66667Z"
                fill="currentColor"/>
            <path
                d="M0 8C0 7.0795 0.814027 6.33333 1.81818 6.33333H18.1818C19.186 6.33333 20 7.0795 20 8C20 8.9205 19.186 9.66667 18.1818 9.66667H1.81818C0.814027 9.66667 0 8.9205 0 8Z"
                fill="currentColor"/>
            <path
                d="M1.81818 12.6667C0.814027 12.6667 0 13.4128 0 14.3333C0 15.2538 0.814027 16 1.81818 16H18.1818C19.186 16 20 15.2538 20 14.3333C20 13.4128 19.186 12.6667 18.1818 12.6667H1.81818Z"
                fill="currentColor"/>
        </svg>
    )
}