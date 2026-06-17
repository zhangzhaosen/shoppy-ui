import { NextRequest } from "next/server";
import authenticated from "./app/auth/actions/authenticated";
import { unauthenicatedRoutes } from "./app/common/constants/routes";
export async function proxy(request : NextRequest){
  //console.log('proxy.....')
  const auth = await authenticated() 
  if(!auth && !unauthenicatedRoutes.some((route) =>  request.nextUrl.pathname.startsWith(route.path))){
    return Response.redirect( new URL('/auth/login', request.url))
  }
}

export const config = {
  matcher: ["/((?!api|_next|static|_next/image|_next/font|_next/redirects|_next/robots.txt|_next/sitemap.xml|_next/manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|.*\\.png$).*)"],
}