import { ToJson } from "../components/ToJson";

const list = [
    { id: 1, name: 'Fabio' },
    { id: 2, name: 'Lorenzo' },
    { id: 3, name: 'Silvia' }
];

export function DemoList() {
    return <div>
        Demo list

        {
            list.map(item => {
                return (
                <li key={item.id}>
                    {item.name}
                    <button>Delete</button>
                </li>
                )
            })
        }

        <ToJson data={list} />
    </div>
}
