import { Card, Stack, Typography } from "@mui/material";
import { Product as IProduct } from "./interfaces/product.interface";
import { API_URL } from "../common/constants/api";
import Image from "next/image";

interface ProductProps {
  product: IProduct
}
export default function Product({ product }: ProductProps) {
  return (
    <Card className="p-4">
      <Stack spacing={2}>
        <Typography variant="h4">
          {product.name}
        </Typography>
        {
          product.imageExists && (
            <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
            <Image
              src={`${API_URL}/products/${product.id}.png`}
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
        <Typography >
          ${product.price}
        </Typography>
      </Stack>
    </Card>
  )
}