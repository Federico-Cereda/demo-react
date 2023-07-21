import { useState } from "react";

export function useCounter() {
    const [totalProducts, setTotalProducts] = useState(0);
    
    function inc(step: number) {
        setTotalProducts(s => s + step)
    }

    function dec(step: number) {
        setTotalProducts(s => s - step)
    }

    return {
        increment: inc,
        decrement: dec,
        value: totalProducts 
    }
}
