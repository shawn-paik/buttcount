class App extends React.Component {

	constructor(){
		super()
		this.state = {  
			   	butts: [],
			   	buttsToday:[],
					buttsThisWeek: [],
					buttsThisMonth: [],
					buttsThisYear:[]
					
		}
		this.addButts=this.addButts.bind(this)
		this.minusButts=this.minusButts.bind(this)
	}

	componentWillMount(){
		this.setState({
			butts: this.props.current_user.butts,
			buttsThisYear: this.props.current_user.butts_this_year,
			buttsThisMonth: this.props.current_user.butts_this_month,
			buttsToday: this.props.current_user.butts_today,
			buttsThisWeek: this.props.current_user.butts_this_week

		})
	}

	addButts(event){
		this.state.buttcount += 1
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
				buttsToday: response.butts_today,
				buttsThisWeek: response.butts_this_week
			})
			// debugger
		})

	}

	minusButts(event){
		this.state.buttcount -= 1
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
				buttsToday: response.butts_today,
				buttsThisWeek: response.butts_this_week
			})
			// debugger
		})

	}

	render(){
		return(
			<div className="app-container">
				<ButtTime  add={this.addButts} minus={this.minusButts} butts = {this.state.butts} buttTime={'total'}/>
				<ButtTime  add={this.addButts} butts = {this.state.buttsToday} minus={this.minusButts} buttTime={'today'}/>
				<ButtTime  add={this.addButts} butts = {this.state.buttsThisWeek} minus={this.minusButts} buttTime={'week'}/>
				<ButtTime  butts = {this.state.buttsThisMonth} add={this.addButts} minus={this.minusButts} buttTime={'month'}/>
				<ButtTime  butts={this.state.buttsThisYear} add={this.addButts} minus={this.minusButts} buttTime={'year'}/>
			</div>
			)
	}
}