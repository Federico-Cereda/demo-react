interface ToJsonProps {
    data: any;
}
export function ToJson(props: ToJsonProps) {
    return <pre>
        {JSON.stringify(props.data, null, 2)}
        </pre>
}
