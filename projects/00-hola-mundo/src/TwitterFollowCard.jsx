import { useState } from "react"

export function TwitterFollowCard ({ formatUserName, userName, name }) {
    //const imageSrc = `https://unavatar.io/${userName}`
    const [isFoollowing, setIsFollowing] = useState(false)

    const text = isFoollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFoollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFoollowing)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    alt="El avatar de midudev"
                    //src={imageSrc}
                    src={`https://unavatar.io/${userName}`}
                 />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}