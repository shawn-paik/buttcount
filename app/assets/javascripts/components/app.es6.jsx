class App extends React.Component {

	constructor(){
		super()
		this.state = {  
			   	butts: [],
					buttsThisYear:[],
					buttsThisMonth: [],
					buttsToday:[]
		}
		this.addButts=this.addButts.bind(this)
		this.minusButts=this.minusButts.bind(this)
	}

	componentWillMount(){
		this.setState({
			butts: this.props.current_user.butts,
			buttsThisYear: this.props.current_user.butts_this_year,
			buttsThisMonth: this.props.current_user.butts_this_month,
			buttsToday: this.props.current_user.butts_today
		})
	}

	addButts(event){
		event.preventDefault()
		$.ajax({
			method:'POST',
			url: '/butts'
		}).done(response=>{
			// debugger
			this.setState({
				butts: response.butts,
				buttsThisYear: response.butts_this_year,
				buttsThisMonth: response.butts_this_month,
				buttsToday: response.butts_today
			})
			// debugger
		})

	}

	minusButts(event){
		event.preventDefault()
		var lastButt=this.state.butts.slice(-1)[0].id
		$.ajax({
			method:'DELETE',
			url:'/butts/'+lastButt
		}).done(response=>{
			// debugger
			this.setState({
				butts: response.butts,
				buttsThisYear: response.butts_this_year,
				buttsThisMonth: response.butts_this_month,
				buttsToday: response.butts_today
			})
			// debugger
		})

	}

	render(){
		return(
			<div className="container">
				<ButtTime butts= {this.state.butts} add={this.addButts} minus={this.minusButts} buttTime={'total'}/>
				<ButtTime butts={this.state.buttsToday} add={this.addButts} minus={this.minusButts} buttTime={'today'}/>
			</div>
			)
	}
}