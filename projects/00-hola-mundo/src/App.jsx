import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const format = (userName) => `@${userName}`
    return (
        //para no usar <React.Fragment> puedo usar <></>
        <section className='App'> 
            <TwitterFollowCard formatUserName={format} userName="github/mdo" name="MDO" isfollowing={true} />
            <TwitterFollowCard formatUserName={format} userName="x/midudev" name="MiDuDev" />
            <TwitterFollowCard formatUserName={format} userName="github/mdo" name="MDO" />
            <TwitterFollowCard formatUserName={format} userName="github/mdo" name="MDO" />
            <TwitterFollowCard formatUserName={format} userName="x/midudev" name="MiDuDev" />
        </section>
    )
}