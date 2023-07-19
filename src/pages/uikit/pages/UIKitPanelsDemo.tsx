import { Card } from "../../../shared/Card"
import { Panel } from "../../../shared/Panel"

export function UIKitPanelsDemo() {

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
    </div>
}
