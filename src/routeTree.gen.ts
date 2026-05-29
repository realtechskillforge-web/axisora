/* eslint-disable */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// This file is manually maintained for the SPA build.
// When you run `vite dev` or `vite build`, TanStack Router will auto-regenerate it.

import { Route as rootRouteImport } from './routes/__root'
import { Route as SupportRouteImport } from './routes/support'
import { Route as AboutRouteImport } from './routes/about'
import { Route as IndexRouteImport } from './routes/index'
import { Route as ProgramsIndexRouteImport } from './routes/programs.index'
import { Route as FreelancingIndexRouteImport } from './routes/freelancing.index'
import { Route as ProgramsSlugRouteImport } from './routes/programs.$slug'
import { Route as FreelancingSlugRouteImport } from './routes/freelancing.$slug'

const SupportRoute = SupportRouteImport.update({
  id: '/support',
  path: '/support',
  getParentRoute: () => rootRouteImport,
} as any)
const AboutRoute = AboutRouteImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const ProgramsIndexRoute = ProgramsIndexRouteImport.update({
  id: '/programs/',
  path: '/programs/',
  getParentRoute: () => rootRouteImport,
} as any)
const FreelancingIndexRoute = FreelancingIndexRouteImport.update({
  id: '/freelancing/',
  path: '/freelancing/',
  getParentRoute: () => rootRouteImport,
} as any)
const ProgramsSlugRoute = ProgramsSlugRouteImport.update({
  id: '/programs/$slug',
  path: '/programs/$slug',
  getParentRoute: () => rootRouteImport,
} as any)
const FreelancingSlugRoute = FreelancingSlugRouteImport.update({
  id: '/freelancing/$slug',
  path: '/freelancing/$slug',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/support': typeof SupportRoute
  '/freelancing/$slug': typeof FreelancingSlugRoute
  '/programs/$slug': typeof ProgramsSlugRoute
  '/freelancing/': typeof FreelancingIndexRoute
  '/programs/': typeof ProgramsIndexRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/support': typeof SupportRoute
  '/freelancing/$slug': typeof FreelancingSlugRoute
  '/programs/$slug': typeof ProgramsSlugRoute
  '/freelancing': typeof FreelancingIndexRoute
  '/programs': typeof ProgramsIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/support': typeof SupportRoute
  '/freelancing/$slug': typeof FreelancingSlugRoute
  '/programs/$slug': typeof ProgramsSlugRoute
  '/freelancing/': typeof FreelancingIndexRoute
  '/programs/': typeof ProgramsIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/support'
    | '/freelancing/$slug'
    | '/programs/$slug'
    | '/freelancing/'
    | '/programs/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/support'
    | '/freelancing/$slug'
    | '/programs/$slug'
    | '/freelancing'
    | '/programs'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/support'
    | '/freelancing/$slug'
    | '/programs/$slug'
    | '/freelancing/'
    | '/programs/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  SupportRoute: typeof SupportRoute
  FreelancingSlugRoute: typeof FreelancingSlugRoute
  ProgramsSlugRoute: typeof ProgramsSlugRoute
  FreelancingIndexRoute: typeof FreelancingIndexRoute
  ProgramsIndexRoute: typeof ProgramsIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  SupportRoute: SupportRoute,
  FreelancingSlugRoute: FreelancingSlugRoute,
  ProgramsSlugRoute: ProgramsSlugRoute,
  FreelancingIndexRoute: FreelancingIndexRoute,
  ProgramsIndexRoute: ProgramsIndexRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
