import { Grid, Stack, Typography } from "@mui/material";
import getProduct from "./get-product";
import { API_URL } from "@/app/common/constants/api";
import Image from "next/image";
import { getProductImage } from "../product-image";
interface SingleProductProps {
  params: Promise<{
    productId: string;
  }>
}
export default async function SingleProduct({ params }: SingleProductProps) {

  const resolvedParams = params instanceof Promise ? await params : params;

  const productId = Number(resolvedParams.productId)
  const product = await getProduct(productId)
  console.log('productId', productId, product)

  return (
    <Grid container spacing={3} className="mb-3" rowSpacing={3}>


      {product.imageExists &&
        <Grid size={{ sm: 6, xs: 12 }}>
          {

            <div className="relative w-full sm:w-3/4" style={{ aspectRatio: '16 / 9' }}>
              <Image
                src={getProductImage(product.id)}
                alt={"picture of the product"}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

          }
        </Grid>
      }
      <Grid size={{ sm: 6, xs: 12 }}>
        <Stack spacing={2}>
          <Typography variant="h4">
            {product.name}
          </Typography>

          <Typography >
            {product.description}
          </Typography>
          <Typography >
            ${product.price}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  )
}