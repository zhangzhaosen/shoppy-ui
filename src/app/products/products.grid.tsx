'use client'
import { Grid } from "@mui/material";
import { Product as IProduct } from "./interfaces/product.interface";
import Product from "./product";
import { useEffect } from "react";
import { API_URL } from "../common/constants/api";
import { io, Socket } from "socket.io-client";
import revalidateProducts from "./actions/revalidate-products";
import getAuthentication from "../auth/actions/get-authentication";

interface ProductGridProps {
  products: IProduct[]
}

export default function ProductGrid({ products }: ProductGridProps) {

  useEffect(() => {

    let socket: Socket
    const createSocket = async () => {

      const authenticationValue = await getAuthentication()
      console.log('xxxxxx ProductGrid authenticationValue', authenticationValue)
     // debugger
      socket = io(API_URL!, {
        auth: {
          Authentication: authenticationValue,
        },
      });

      socket.on("productUpdated", () => {
        revalidateProducts()
      })
    }
    createSocket()

    return () => {
      socket?.disconnect()
    }
  }, [])
  return (
    <Grid container spacing={3} sx={{ height: "85vh", overflowY: "auto" }}>
      {products.map((product) => (
        <Grid key={product.id} size={{ sm: 6, lg: 4, xs: 12 }}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  )
}