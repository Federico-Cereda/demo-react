import { ProductsList } from "./components/ProductsList"
import { ProductsForm } from "./components/ProductsForm"
import { ServerError } from "../../shared/ServerError"
import { PageTitle } from "../../shared/PageTitle"
import { useProducts } from "./hooks/useProducts"

export function Crud() {
    const { products, error, actions } = useProducts()

    return <div>
        <PageTitle>Crud</PageTitle>

        { error && <ServerError msg="error" /> }
        <ProductsForm onSave={actions.saveProduct} />
        <ProductsList data={products} onDeleteProduct={actions.deleteProduct} />

    </div>
}
