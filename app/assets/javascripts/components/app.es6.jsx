class App extends React.Component {
	constructor(){
		super()
	}
	render(){
		return(
			<div className="container">
				{console.log(this.props.current_user)}
				<p>Hey there!</p>
				<p>You had this many butts:</p>
				{this.props.current_user.butts.length}
			</div>
			)
	}
}