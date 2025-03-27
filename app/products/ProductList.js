// app/products/ProductsList.js
"use client";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Skeleton from "@mui/material/Skeleton";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export function ProductsList({ products }) {
  return (
    <>
      <div className="flex flex-col items-center m-20">
        <div className="grid grid-rows-3 gap-4 grid-cols-3 gap-4">
          <Suspense
            fallback={
              <>
                <Box sx={{ width: 300 }}>
                  <Skeleton />
                  <Skeleton animation="wave" />
                  <Skeleton animation={false} />
                </Box>
              </>
            }
          >
            {products.map((product) => (
              <Card sx={{ maxWidth: 345 }} key={product._id}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={350}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {product.description}
                    <Link href={`/product/${product._id}`}>
                      <Button size="small">View More</Button>
                    </Link>
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <div className="flex items-center">
                  <Button size="small" variant="contained">
                    Add to Cart
                  </Button>
                </div> */}
                </CardActions>
              </Card>
            ))}
          </Suspense>
        </div>
      </div>
    </>
  );
}
