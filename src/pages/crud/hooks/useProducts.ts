import { useEffect, useState } from "react"
import { Product } from "../../../model/product"
import axios from "axios"

export function useProducts() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [products, setProducts] = useState<Product[]>([])
    const [error, setError] = useState<string | null>(null)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        setError(null)
        axios.get<Product[]>('http://localhost:3000/products')
        .then(res => {
            setProducts(res.data)
        })
        .catch(() => {
            setError('Products are not loaded')
        })
    }, [])

    function deleteProduct(productToDelete: Product) {
        setError(null)
        axios.delete(`http://localhost:3000/products/${productToDelete.id}`)
        .then(() => {
            setProducts(
                prev => prev.filter(p => p.id !== productToDelete.id)
            )
        })
        .catch(() => {
            setError('Product not deleted')
        })
    }

    function saveProduct(formData: Omit<Product, 'id'>) {
        if (selectedProduct) {
            edit(formData)
        } else {
            add(formData)
        }
    }

    function add(formData: Omit<Product, 'id'>) {
        axios.post<Product>('http://localhost:3000/products', formData)
            .then(res => {
            setProducts(prev => [...prev, res.data])
            closeModal()
            })
    }

    function edit(formData: Omit<Product, 'id'>) {
        axios.patch<Product>(`http://localhost:3000/products/${selectedProduct?.id}`, formData)
            .then(res => {
            setProducts(
                prev => prev.map(p => p.id === selectedProduct?.id ? res.data : p)
            )
            closeModal();
            setSelectedProduct(null)
        })
    }

    function setActiveProduct(p: Product) {
        openModal()
        setSelectedProduct(p)
    }

    function openModal() {
        setShowModal(true)
    }

    function closeModal() {
        setShowModal(false)
    }

    return {
        products,
        error,
        selectedProduct,
        showModal,
        actions: {
            saveProduct,
            deleteProduct,
            setActiveProduct,
            openModal,
            closeModal
        }
    }
}
