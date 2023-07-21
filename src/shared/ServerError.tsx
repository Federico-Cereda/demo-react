export function ServerError(props: { msg: string }) {
    return (
        <div className="alert alert-danger">{props.msg}</div>
    )
}
