import React from 'react'

class ShoppingList extends React.Component {
	constructor( props ) {
		super( props )
	}
	
	render() {
		return (
			//füge hier deinen HTML-Code ein
			<div id="container">
				{/* ToDo: füge hier drunter Deinen HTML-Code ein */ }
				
				<header>
					<h1>HaushaltsBuch</h1>
					<nav>
						<input type="text" placeholder="Artikel hinzufügen"/>
						<button className="material-icons">add_circle</button>
					</nav>
				</header>
				
				<hr/>
				<main>
					<section>
						<h2>Einkaufen
							<i className="material-icons">expand_less</i>
						</h2>
						<dl>
							<dt>Obst & Gemüse
								<i className="material-icons">expand_less</i>
							</dt>
							<dd><label><input type="checkbox"/> Brokkoli</label></dd>
							<dt>Getreideprodukte
								<i className="material-icons">expand_less</i>
							</dt>
							<dd><label><input type="checkbox"/> Reis</label></dd>
							<dt>Milchprodukte
								<i className="material-icons">expand_less</i>
							</dt>
							<dd><label><input type="checkbox"/> Streukäse</label></dd>
						</dl>
					</section>
					<hr/>
					<section>
						<h2>Erledigt
							<i className="material-icons">expand_less</i>
						</h2>
						<dl>
							<dt>Hülsenfrüchte
								<i className="material-icons">expand_less</i>
							</dt>
							<dd><label><input type="checkbox"/> <s>Tofu</s></label></dd>
						</dl>
					</section>
					</main>
				<hr/>
				<footer>
					<button className="mdc-button mdc-button--raised">
						<span className="material-icons">bookmark_add</span>
						<span className="mdc-button__ripple"></span> Gruppen
					</button>
					<button className="mdc-button mdc-button--raised">
						<span className="material-icons">sort</span>
						<span className="mdc-button__ripple"></span> Sort
					</button>
					<button className="mdc-button mdc-button--raised">
						<span className="material-icons">settings</span>
						<span className="mdc-button__ripple"></span> Setup
					</button>
				</footer>
			</div>
		)
	}
}

export default ShoppingList