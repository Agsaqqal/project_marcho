import svgSprite from "gulp-svg-sprite";
export const sprite = () => {
	return app.gulp.src(`${app.path.src.svgicons}`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SVG",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: '../img/sprite/icons.svg',
					// example: true
				}
			},
			dimension: { // Set maximum dimensions
				maxWidth: 100,
				maxHeight: 100
			},
			shape: {
				id: {
					separator: '',
					generator: 'svg-'
				},
				transform: [
					{
						svgo: {
							plugins: [
								{ removeXMLNS: true },
								{ convertPathData: false },
								{ removeViewBox: false },
								{ inlineStyles: true },
								{ removeAttrs: { attrs: ['fill', 'style'] } }
							]
						}
					}
				]
			},

			svg: {
				rootAttributes: {
					style: 'display: none;',
					'aria-hidden': true
				},
				xmlDeclaration: false
			}
		}))
		.pipe(app.gulp.dest(`${app.path.srcFolder}`));
}
