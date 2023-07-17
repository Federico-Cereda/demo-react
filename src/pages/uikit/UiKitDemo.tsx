// import { Card } from "../../shared/Card"
import { Panel, PanelBody, PanelTitle } from "../../shared/Panel"
// import { ToJson } from "../../shared/ToJson"
// import NoItems from "../counter/components/NoItems"

export function UiKitDemo() {
    return <div>
        <h1>UiKit demo</h1>

        {/* <Card 
        title="one" 
        icon="fa fa-times"
        >
            <span>X</span>
            <div>Y</div>
        </Card> */}

        {/* <Card title="title">
            <div className="one">ciao</div>
            <div className="two">miao</div>
        </Card> */}

        <Panel>
            <Panel.Title>WIDGET TITLE</Panel.Title>
            <Panel.Body>lorem</Panel.Body>
            <Panel.Body>lorem</Panel.Body>
            <Panel.Body>lorem</Panel.Body>
        </Panel>

        {/* <Card title="two">
            <div>ciao</div>
            <div>miao</div>
        </Card> */}

    </div>
}