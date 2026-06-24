import { Panel } from 'src/components/ui/Panel'
import { Techpill } from 'src/components/Techpill'
import { skills } from 'src/components/data/skills'

export function About() {
    return (
        <section>

            <Panel>
                <h1>Nathan Nascimento Lamas</h1>
                <p>FULL-STACK DEVELOPER</p>
            </Panel>

            <Panel delay={0.15}>
            <div className="panel-header">Technical skills</div>
            <div className="grid grid-cols-4 gap-4">
                {Object.entries(skills).map(([categoria, itens]) =>
                <div key={categoria}>
                <h4>{categoria}</h4>
                <ul>
                    {itens.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
            )}
            </div>
            </Panel>
            
        </section>
    )
}