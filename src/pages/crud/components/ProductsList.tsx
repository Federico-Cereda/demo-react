import { Product } from "../../../model/product"

interface ProductsListProps {
    data: Product[];
    onDeleteProduct: (p: Product) => void;
}

export function ProductsList(props: ProductsListProps) {
    return (
        <>
        {
            props.data.map(p => (
                <li key={p.id}>
                    {p.name}
                    <button onClick={() => props.onDeleteProduct(p)}>delete</button>
                </li>
            ))
        }
        </>
    )
}
