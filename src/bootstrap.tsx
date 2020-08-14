import { h, render } from "preact";
import { router } from './routing/routes';

async function renderRoute() {
	const result = await router.value.resolve(window.location.pathname)
	if (result.type === 'page') {
		const View = result.content.view
		render(<View />, document.body)
	}
}

renderRoute()