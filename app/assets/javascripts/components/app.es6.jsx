class App extends React.Component {
	constructor(){
		super()
		this.state = {  
			butts: []
		}
		this.addButts=this.addButts.bind(this)
		this.minusButts=this.minusButts.bind(this)
	}

	componentDidMount(){
		this.setState({
			butts: this.props.current_user.butts
		})
	}

	addButts(event){
		// event.preventDefault()
		$.ajax({
			method:'POST',
			url: '/butts'
		}).done(response=>{
			this.setState({
				butts: response.butts
			})
		})

	}

	minusButts(event){
		event.preventDefault()
		
		var lastButt=this.state.butts.slice(-1)[0].id
		debugger
		$.ajax({
			method:'DELETE',
			url:'/butts/'+lastButt
		}).done(response=>{
			this.setState({
				butts: response.butts
			})
		})

	}

	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
					</div>
					<div className="col-sm-4 day">
						<p>Butts today:</p>
						{this.state.butts? this.state.butts.length : 0}
						<br></br>
						<input type="button" name="decrease" value="-" onClick={this.minusButts}/>
						<input type="button" name="increase" value="+" onClick={this.addButts}/>
					</div>
					<div className="col-sm-4">
					</div>
				</div>
			</div>
			)
	}
}