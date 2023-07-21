import { useEffect, useState } from "react"
import { Product } from "../../../model/product"
import axios from "axios"

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([])
    const [error, setError] = useState<string | null>(null)

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
        axios.post<Product>('http://localhost:3000/products', formData)
        .then(res => {
            setProducts(prev => [...prev, res.data])
        })
    }

    return {
        products,
        error,
        actions: {
            saveProduct,
            deleteProduct
        }
    }
}
