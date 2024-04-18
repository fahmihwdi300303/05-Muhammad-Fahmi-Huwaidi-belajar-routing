type Props = {
    params: {
        productId: string
        reviewId: string
    }
}

export default function ProductDetails({ params }: Props) {
    return(
        <h1> Details about product {params.productId}, the review number {params.reviewId}</h1>
    ); 
}