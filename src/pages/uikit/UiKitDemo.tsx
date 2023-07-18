import { Card } from "../../shared/Card"
import { Panel } from "../../shared/Panel"
// import { ToJson } from "../../shared/ToJson"
// import NoItems from "../counter/components/NoItems"

export function UiKitDemo() {

    function openGoogle() {
        window.open('https://www.google.com')
    }

    function doSomething() {
        console.log('log!!!')
    }

    return <div>
        <h1>UiKit demo</h1>

        <Card 
        title="card 1" 
        icon="fa fa-google"
        iconClick={openGoogle}
        variant="primary"
        >
            lore ipsum
        </Card>

        <Card 
        title="card 2" 
        icon="fa fa-facebook"
        iconClick={doSomething}
        >
            lore ipsum
        </Card>

        <br/>

        <Panel>
            <Panel.Title>WIDGET TITLE</Panel.Title>
            <Panel.Body>lorem</Panel.Body>
            <Panel.Body>lorem</Panel.Body>
            <Panel.Body>lorem</Panel.Body>
        </Panel>

        {/* <Card title="title">
            <div className="one">ciao</div>
            <div className="two">miao</div>
        </Card> */}

        {/* <Card title="two">
            <div>ciao</div>
            <div>miao</div>
        </Card> */}

    </div>
}