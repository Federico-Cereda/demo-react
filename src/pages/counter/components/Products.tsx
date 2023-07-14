// import { Role } from "../model/role";

interface ProductsProps {
    value: number;
    // role?: Role;
}

export function Products(props: ProductsProps) {
    return (
      <div>
        <h1>there are {props.value} products</h1>
      </div>
    )
  }
