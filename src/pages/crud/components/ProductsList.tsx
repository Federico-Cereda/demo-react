import { Product } from "../../../model/product"
import { ProductsListItem } from "./ProductsListItem";

interface ProductsListProps {
    data: Product[];
    active: Product | null;
    onSelectProduct: (p: Product) => void;
    onDeleteProduct: (p: Product) => void;
}

export function ProductsList(props: ProductsListProps) {

    return (
        <ul className="list-group">
          {
            props.data.map(p => 
            <ProductsListItem 
            item={p} 
            selected={p.id === props.active?.id} 
            key={p.id} 
            onSelectProduct={props.onSelectProduct} 
            onDeleteProduct={props.onDeleteProduct} 
            /> )
        }
        </ul>
    )
}
