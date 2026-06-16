'use client'
import { Card, CardActionArea, Stack, Typography } from "@mui/material";
import { Product as IProduct } from "./interfaces/product.interface";
import { API_URL } from "../common/constants/api";
import Image from "next/image";
import { getProductImage } from "./product-image";
import { useRouter } from "next/navigation";

interface ProductProps {
  product: IProduct
}
export default function Product({ product }: ProductProps) {

  const router = useRouter()

  return (
    <CardActionArea onClick={() => {
      router.push(`/products/${product.id}`)
    }}>
      <Card className="p-4">
        <Stack spacing={2}>
          <Typography variant="h2">
            {product.name}
          </Typography>
          {
            product.imageExists && (
              <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
                <Image
                  src={getProductImage(product.id)}
                  alt={"picture of the product"}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )
          }
          <Typography >
            {product.description}
          </Typography>
          <Typography variant="h4">
            ${product.price}
          </Typography>
        </Stack>
      </Card>
    </CardActionArea>
  )
}