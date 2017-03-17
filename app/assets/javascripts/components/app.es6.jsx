class App extends React.Component {
	constructor(){
		super()
		this.state = {

			butts: []
		}
		this.addButts=this.addButts.bind(this)
	}

	componentDidMount(){
		this.setState({
			butts: this.props.current_user.butts.length
		})
	}

	addButts(event){
		event.preventDefault()
		$.ajax({
			method:'POST',
			url: '/butts'

		}).done(response=>{
			debugger
		})

	}

	render(){
		return(
			<div className="container">
				{console.log(this.props.current_user)}
				<p>Hey there!</p>
				<p>You had this many butts:</p>
				{this.state.reward? this.state.reward : 0}
				<br></br>
				<input type="button" name="decrease" value="-" />
				<input type="button" name="increase" value="+" onClick={this.addButts}/>
			</div>
			)
	}
}