import { NextRequest } from "next/server";

const unauthorizedRoutes = ['/auth/login', '/auth/signup']
export function proxy(request : NextRequest){
  console.log('proxy.....')
  const auth = request.cookies.get('Authentication')?.value
  if(!auth && !unauthorizedRoutes.includes(request.nextUrl.pathname)){
    return Response.redirect( new URL('/auth/login', request.url))
  }
}

export const config = {
  matcher: ["/((?!api|_next|static|_next/image|_next/font|_next/redirects|_next/robots.txt|_next/sitemap.xml|_next/manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|_next/asset-manifest.json|.*\\.png$).*)"],
}