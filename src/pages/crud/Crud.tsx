import { ProductsList } from "./components/ProductsList"
import { ProductsForm } from "./components/ProductsForm"
import { ServerError } from "../../shared/ServerError"
import { PageTitle } from "../../shared/PageTitle"
import { useProducts } from "./hooks/useProducts"
import { Modal } from "../../shared/Modal"

export function Crud() {
    const { products, 
            error, 
            selectedProduct, 
            showModal, 
            actions 
        } = useProducts()

    return <div>

        <PageTitle>Crud</PageTitle>

        { error && <ServerError msg="error" /> }

        <Modal open={showModal}>
            <ProductsForm 
            active={selectedProduct} 
            onSave={actions.saveProduct} 
            />
        </Modal>

        <i 
        className="fa fa-plus-circle fa-2x" 
        onClick={actions.openModal}
        ></i>

        <ProductsList
            active={selectedProduct}
            data={products} 
            onDeleteProduct={actions.deleteProduct} 
            onSelectProduct={actions.setActiveProduct}/>

    </div>
}
