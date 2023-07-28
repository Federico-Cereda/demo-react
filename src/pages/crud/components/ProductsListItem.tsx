import clsx from "clsx";
import { useState } from "react";
import { Product } from "../../../model/product";

export interface ProductsListItemProps {
    item: Product;
    selected: boolean;
    onSelectProduct: (p: Product) => void;
    onDeleteProduct: (p: Product) => void;
}

export function ProductsListItem(props: ProductsListItemProps) {
    const { item } = props;
    const [isOpen, setIsOpen] = useState(false);

    return (
                <li 
                  className={clsx('list-group-item', {'active':props.selected})}
                  onClick={() => props.onSelectProduct(item)}
                >
                    <div className="d-flex justify-content-between">
                        {item.name}

                        <div className="d-flex gap-2">
                            <i
                                className="fa fa-trash"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    props.onDeleteProduct(item)
                                }}
                            />

                            <i 
                                className="fa fa-arrow-circle-down"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setIsOpen(prev => !prev)
                                }}
                            ></i>
                        </div>
                        
                    </div>

                    {
                        isOpen &&
                        <div>
                            <em>contenuto nascosto € {item.cost}</em>
                        </div>
                    }

                </li>
    )
}
