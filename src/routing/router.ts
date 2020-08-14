import { ComponentType } from 'preact'
import UniversalRouter, { Routes, RouterContext, RouteResult } from 'universal-router'

type Content = {
	data: any
	view: ComponentType
}

type Result =
	| { type: 'page', content: Content }
	| { type: 'redirect', toPath: string }

type RouteHandler = (context: RouterContext) => RouteResult<Result>

export class RouteRegistry {
	constructor(private readonly routes: Routes<Result, RouterContext>) { }

	add(path: string, action: RouteHandler): RouteRegistry {
		this.routes.push({ path, action })
		return this
	}

	addPage(path: string, getContent: (context: RouterContext) => Content) {
		return this.add(path, ctx => ({ type: 'page', content: getContent(ctx) }))
	}

	addRedirect(path: string, getPath: (context: RouterContext) => string) {
		return this.add(path, ctx => ({ type: 'redirect', toPath: getPath(ctx) }))
	}

	private missingHandler: RouteHandler | null
	handleMissing(action: RouteHandler) {
		this.missingHandler = action
	}

	build() {
		if (this.missingHandler) {
			this.add('(.*)', this.missingHandler)
		}

		return new UniversalRouter(this.routes)
	}
}