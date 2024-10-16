/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as StartImport } from './routes/start'
import { Route as BattleImport } from './routes/battle'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const SearchLazyImport = createFileRoute('/search')()

// Create/Update Routes

const SearchLazyRoute = SearchLazyImport.update({
  path: '/search',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/search.lazy').then((d) => d.Route))

const StartRoute = StartImport.update({
  path: '/start',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/start.lazy').then((d) => d.Route))

const BattleRoute = BattleImport.update({
  path: '/battle',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/battle.lazy').then((d) => d.Route))

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/battle': {
      id: '/battle'
      path: '/battle'
      fullPath: '/battle'
      preLoaderRoute: typeof BattleImport
      parentRoute: typeof rootRoute
    }
    '/start': {
      id: '/start'
      path: '/start'
      fullPath: '/start'
      preLoaderRoute: typeof StartImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      id: '/search'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/battle': typeof BattleRoute
  '/start': typeof StartRoute
  '/search': typeof SearchLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/battle': typeof BattleRoute
  '/start': typeof StartRoute
  '/search': typeof SearchLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/battle': typeof BattleRoute
  '/start': typeof StartRoute
  '/search': typeof SearchLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/battle' | '/start' | '/search'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/battle' | '/start' | '/search'
  id: '__root__' | '/' | '/battle' | '/start' | '/search'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  BattleRoute: typeof BattleRoute
  StartRoute: typeof StartRoute
  SearchLazyRoute: typeof SearchLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  BattleRoute: BattleRoute,
  StartRoute: StartRoute,
  SearchLazyRoute: SearchLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/battle",
        "/start",
        "/search"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/battle": {
      "filePath": "battle.tsx"
    },
    "/start": {
      "filePath": "start.tsx"
    },
    "/search": {
      "filePath": "search.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
